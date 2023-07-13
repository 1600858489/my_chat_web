<template>
  <div class="main">
    <div class="sidebar">
      <h3>会话列表</h3>
      <button class="new-conversation-button" @click="createNewConversation">新建会话</button>
      <ul>
        <li v-for="conversation in conversations" :key="conversation.conversation_id" @click="getHistory(conversation.conversation_id)">
          {{ conversation.conversation_name }}
        </li>
      </ul>
      <div class="user-info">
        <div class="user-avatar" :class="{ 'grayed-out': !user.loggedIn }">
          <img :src="user.avatar" alt="User Avatar" />
        </div>
        <span>{{ user.loggedIn ? user.username : '未登录' }}</span>
        <button v-if="user.loggedIn" @click="logout" class="logout">退出登录</button>
        <button v-else @click="goToLogin" class="login">登录</button>
      </div>
    </div>
    <div class="main-content">
      <div id="chat-log">
        <div v-for="(message, index) in messages" :key="index" :class="getMessageClass(message.role)">
          <strong>{{ message.role }}: {{ message.content }}</strong>
        </div>
      </div>

      <div class="user-input-container">
        <input type="text" v-model="userInput" @keydown.enter="sendUserInput" />
        <button :disabled="sendButtonDisabled" @click="sendUserInput">Send</button>
      </div>
    </div>
  </div>
</template>

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

<style>
html{
  height:100%;
  width: 100%;
}

body{
  display: flex;
  height:99.7%;
  width: 100%;
  margin:0px auto;
  overflow:hidden;
}

.sidebar {
  flex: 0 0 15%;
  padding: 10px;
  background-color: #f0f0f0;
  position: relative;
  text-align: center;
  height: 100%;
}

.main {
  display: flex;
  width: 100%;
  height: 100%;
}


.sidebar h3 {
  margin-bottom: 10px;
}

.new-conversation-button {
  margin-bottom: 10px;
}

.sidebar ul {
  list-style-type: none;
  padding-left: 0;
}

.sidebar li {
  cursor: pointer;
  padding: 5px;
  background-color: #fff;
  margin-bottom: 5px;
}

.user-info {
  position: relative;
  bottom: -68%;
  width: 100%;
  margin-top: 10px;
  text-align: center;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.user-avatar img {
  width: 50%;
  height: auto;
}

.grayed-out {
  filter: grayscale(100%);
}

.logout {
  width: 95%;
}

/* Main content styles */
.main-content {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}


#chat-log {
  overflow-y: scroll;
  flex-grow: 1;
  border: 1px solid #ccc;
  padding: 10px;
}


.user-input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.message-ai {
  text-align: left;
  margin-bottom: 5px;
}

.message-user {
  text-align: left;
  margin-bottom: 5px;
}
</style>
