<script>
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      history: [],
      conversations: [], // 会话列表
      selectedConversationId: null,
      messages: [], // 对话消息
      userInput: '', // 用户输入内容
      sendButtonDisabled: true, // 发送按钮是否禁用
      socket: null, // WebSocket连接
      user: {
        loggedIn: false, // 是否已登录
        username: '', // 用户名
        avatar: require('@/assets/logo.png'), // 头像路径
      },
    };
  },
  created() {
    this.connectWebSocket();
    this.getConversationList();
    this.getUserInfo();
    // this.getHistory()
  },
  methods: {
    getHistory(conversationId, length = "") {
      this.selectedConversationId = conversationId;
      const Data = {
        conversation_id: conversationId,
        length: length,
      };
      fetch('http://128.14.76.82:8000/api/get_history/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data)
      })
        .then(response => response.json())
        .then(data => {
          this.history = data.conversations.flatMap((conversation) => {
            return [
              {
                role: 'user',
                content: conversation.content_user,
              },
              {
                role: 'ai',
                content: conversation.content_ai,
              },
            ];
          });
          this.messages = this.history; // 将历史数据赋值给 messages 数组
          console.log(this.history);
        })
        .catch((error) => {
          console.error('获取历史记录请求出错:', error);
        });
    },
    getConversationList() {
      const userId = localStorage.getItem('userId');
      var token = localStorage.getItem('token');
      console.log(userId,token)

      const Data = {
        user_id: userId
      };

      // 发送获取会话列表的请求
      fetch(`http://128.14.76.82:8000/api/get_conversation/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body:JSON.stringify(Data),
      })
        .then(response => response.json())
        .then(data => {
          this.conversations = data.conversations;
        })
        .catch(error => {
          console.error(error);
          // 处理错误
        });
    },
    createNewConversation() {
      const userId = localStorage.getItem('userId');
      // const token = Cookies.get('token');
      const conversationData = {
        user_id: userId,
        conversation_name: '新会话', // 可根据需求修改会话名称
      };

      // 发送创建新会话的请求
      fetch('http://128.14.76.82:8000/api/new_conversation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': token,
        },
        body: JSON.stringify(conversationData),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // 刷新会话列表
          this.getConversationList();
        })
        .catch(error => {
          console.error(error);
          // 处理错误
        });
    },
    appendMessage(role = '', content) {
      if (role === 'AI') {
        const lastMessage = this.messages[this.messages.length - 1];
        if (lastMessage && lastMessage.role === 'AI') {
          lastMessage.content += content;
        } else {
          this.messages.push({ role, content });
        }
      } else {
        if (content !== undefined && content !== null) {
          this.messages.push({ role, content });
        }
      }
    },
    getMessageClass(role) {
      return role === 'AI' ? 'message-ai' : 'message-user';
    },
    connectWebSocket() {
      this.socket = new WebSocket('ws://128.14.76.82:8000/ws/chat');

      this.socket.onopen = () => {
        console.log('WebSocket connection established.');
        this.sendButtonDisabled = false;
      };

      this.socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        console.log(message);
        if (message.delta && message.delta.content !== undefined) {
          const content = message.delta.content;
          const finishReason = message.finish_reason;

          if (finishReason === 'stop') {
            this.sendButtonDisabled = true;
          }

          if (finishReason !== 'stop' || content !== undefined) {
            this.appendMessage('AI', content);
          }
        }
      };

      this.socket.onclose = () => {
        console.log('WebSocket connection closed.');
      };
    },
    sendUserInput() {
      // // var mess = "";
      // var his_input = this.history.slice(-6);
      //
      // for (var i=0;i<his_input.length;i++){
      //   mess += his_input[i].content+"\n";
      //
      // }
      // mess += "user:"+this.userInput;
      // // mess.push({
      // //   role: 'user',
      // //   content: this.userInput,
      // // });
      // console.log(mess);
      if (this.socket.readyState === WebSocket.OPEN) {
        const message = {
          user_input: this.userInput,
          conversation_id: this.selectedConversationId,
        };
        // console.log(message);
        this.socket.send(JSON.stringify(message));
        this.appendMessage('User', this.userInput);
        this.userInput = '';
        this.sendButtonDisabled = true;
      } else {
        console.log('WebSocket connection is not open yet.');
      }
    },


    getUserInfo() {
      const loggedIn = localStorage.getItem('loggedIn') === 'true';
      const username = localStorage.getItem('username');
      this.user.loggedIn = loggedIn;
      this.user.username = loggedIn ? username : '';
    },
    logout() {
      const userId = localStorage.getItem('userId');
      const token = Cookies.get('token');

      // 发送退出登录请求
      fetch('http://128.14.76.82:8000/api/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: JSON.stringify({ user_id: userId }),
      })
        .then(response => {
          localStorage.removeItem('loggedIn');
          localStorage.removeItem('username');
          Cookies.remove('token');
          this.user.loggedIn = false;
          this.user.username = '';
          this.user.avatar = require('@/assets/logo.png');
          alert(response.data.message);
        })
        .catch(error => {
          console.error(error);
          // 处理错误
        });
    },
    goToLogin() {
      // 跳转至登录页面
      this.$router.push('/login');
    },
  },
};
</script>