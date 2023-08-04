import Cookies from 'js-cookie';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';

export default {
  data() {
  return {
    svgColors: {
      svgElement1: '#666', // 初始颜色
      svgElement2: '#666', // 初始颜色
      svgElement3: '#666', // 初始颜色
      svgElement4: '#666', // 初始颜色
      svgElement5: '#666', // 初始颜色
    },
    selectedColor: '#666666', // 初始颜色
    selectedSVGId: null,
    showingPage: 1, // -1 表示没有任何界面显示
    isDarkTheme: false, // 是否使用暗色主题
    userInputList: ["test"],
    history: [], // 历史记录
    conversations: [], // 会话列表
    selectedConversationId: null, // 选中的会话ID
    messages: [], // 对话消息
    userInput: '', // 用户输入内容
    sendButtonDisabled: true, // 发送按钮是否禁用
    socket: null, // WebSocket连接
    user: {
    loggedIn: false, // 是否已登录
    username: '', // 用户名
    avatar: require('@/assets/logo1.png'), // 头像路径
    },
    showCreateConversationModal: false, // 控制弹窗的显示和隐藏
    newConversationName: '', // 新建会话的名称
    // showScrollButton: null,
    systemCLM:null,
  };
  },
  created(){

  this.connectWebSocket(); // 连接WebSocket
  this.getConversationList(); // 获取会话列表
  this.getUserInfo(); // 获取用户信息
  this.addClickListeners();//svg被点击时改变颜色事件监听器
  // this.getHistory(); // 获取历史记录（注释掉，因为在selectConversation中调用）
  // this.alterCodeStyle()
    fetch('/systemCLM.json')
      .then(response => response.json())
      .then(data => {
        this.systemCLM = data;
      });
    console.log(this.systemCLM);

  },
  updated() {
  this.$nextTick(() => {
    // 确保 DOM 已经更新
    let contents = document.querySelectorAll('.message-ai');
    contents.forEach(content => {
    // 这里是你的修改内容的代码
    let rawText = content.innerHTML;
    // let replacedText = rawText.replace(/```([\s\S]*?)```/g, '<pre><code class="language">$1</code></pre>');
    let replacedText = rawText.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    content.innerHTML = replacedText;
    });
    hljs.initHighlightingOnLoad();

  });
  },
  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      console.log(this.isDarkTheme);
      this.updateBodyBackgroundColor();
      this.toggleIconDisplay();
    },
    updateBodyBackgroundColor() {
      if (this.isDarkTheme) {
        document.body.classList.add('dark-theme');
      } else {
        document.body.classList.remove('dark-theme');
      }
    },
    toggleIconDisplay() {
      // 获取白天和黑夜图标的元素
      const dayIcon = this.$refs.dayIcon;
      const nightIcon = this.$refs.nightIcon;

      // 判断元素是否存在并切换图标的显示状态
      if (dayIcon && nightIcon) {
        if (this.isDarkTheme) {
          dayIcon.style.display = 'none';
          nightIcon.style.display = 'inline';
        } else {
          dayIcon.style.display = 'inline';
          nightIcon.style.display = 'none';
        }
      }
    },
    // //切换主题
    // const themeOverlay = document.getElementById('theme-overlay');
    // const svgElement4 = document.getElementById('my-svg');
    // let nightMode = false;
    //
    // svgElement4.addEventListener('click', function() {
    //   nightMode = !nightMode;
    //   if (nightMode) {
    //     svgElement4.style.fill = '#ffffff'; // 设置SVG颜色为白色
    //     svgElement4.style.stroke = '#ffffff'; // 设置SVG边框颜色为白色
    //   } else {
    //     // 设置SVG颜色为白天颜色（你可以自行指定白天的颜色）
    //     svgElement4.style.fill = '#f7f7f8';
    //     // 设置SVG边框颜色为白天颜色（你可以自行指定白天的颜色）
    //     svgElement4.style.stroke = '#000000';
    //   }
    //   themeOverlay.classList.toggle('night-mode', nightMode);
    // });

addClickListeners() {
    const svgElements = document.querySelectorAll('.clickable-svg');
    svgElements.forEach((element) => {
      element.addEventListener('click', this.handleSVGClick);
    });
  },



    //点击图标切换颜色
  handleSVGClick(event, svgId) {
     // 判断是否点击的是当前选中的SVG图标
    if (this.selectedSVGId === svgId) {
      // 已选中，则不做处理，直接返回
      return;
    }

    // 获取当前点击的SVG元素的颜色属性
    const currentColor = this.svgColors[svgId];

    // 更新选中的SVG图标的颜色
    const newColor = '#10a37f'; // 设置选中时的颜色
    this.selectedColor = newColor;

    // 还原之前选中的SVG图标的颜色
    if (this.selectedSVGId) {
      this.svgColors[this.selectedSVGId] = currentColor;
    }

    // 更新选中SVG图标对应的颜色属性
    this.svgColors[svgId] = newColor;

    // 更新selectedSVGId为当前选中的SVG图标的ID
    this.selectedSVGId = svgId;
  },

    //点击图标切换会话和模型
    showPage(page) {
      console.log(this.showingPage);
      console.log('page', page);
      this.showingPage = page;
      console.log(this.showingPage);
    },


    Skip2Latest() {

      this.$nextTick(() => {
        var div = document.getElementById('chat-log')
        div.scrollTop = div.scrollHeight;
      })
    },

    openCreateConversationModal() {
      this.showCreateConversationModal = true; // 打开新建会话弹窗
    },
    closeCreateConversationModal() {
      this.showCreateConversationModal = false; // 关闭新建会话弹窗
    },
    handleConversationNameInput(event) {
      this.newConversationName = event.target.value; // 处理输入的会话名
    },
    selectConversation(conversationId) {
      // 保存选中的会话ID
      this.selectedConversationId = conversationId;

      // 获取选中会话的历史记录
      this.getHistory(conversationId);
    },
    getHistory(conversationId, length = "") {
      /**
       * h
       * */
      this.selectedConversationId = conversationId;
      // const token = localStorage.getItem("token");

      const Data = {
        conversation_id: conversationId,
        length: length,
        user_id: localStorage.getItem("userId"),
        token: localStorage.getItem("token"),
      };
      fetch('http://128.14.76.82:8000/api/test/get_history/', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          // 'Cache-Control': 'no-cache, no-store, must-revalidate',
          // 'Pragma': 'no-cache',
          // 'Expires': '0',
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
          this.Skip2Latest()
        })
        .catch((error) => {
          console.error('获取历史记录请求出错:', error);
        });
    },
    getConversationList() {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      const Data = {
        user_id: userId,
        token: token
      };

      // 发送获取会话列表的请求
      fetch(`http://128.14.76.82:8000/api/test/get_conversation/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,

        },
        body: JSON.stringify(Data),
      })
        .then(response => response.json())
        .then(data => {
          this.conversations = data.conversations; // 获取会话列表数据
        })
        .catch(error => {
          console.error(error);
          // 处理错误
          this.conversations = [];
        });
    },
    createNewConversation() {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem("token");
      // const token = Cookies.get('token');
      const conversationData = {
        user_id: userId,
        conversation_name: this.newConversationName, // 可根据需求修改会话名称
        token: token
      };

      // 发送创建新会话的请求
      fetch('http://128.14.76.82:8000/api/test/new_conversation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': token,
        },
        body: JSON.stringify(conversationData),
      })
        .then(response => response.json())
        .then(data => {
          this.showCreateConversationModal = false;
          console.log(data);
          // 刷新会话列表
          this.getConversationList();
        })
        .catch(error => {
          console.error(error);
          // 处理错误
        });
    },

    /**
     * 将新消息追加到聊天中，或将其与上一条消息连接起来。
     * 这个函数:
     * —检查消息发送方的角色(AI或User)。
     * -如果消息来自AI，最后一条消息也是来自AI，它将新内容与最后一条消息连接起来。
     * —如果该消息是用户发送的，并且最后一条消息也是用户发送的，则忽略新消息，避免用户连续发送消息。
     * —否则，将新消息附加到聊天内容中。
     * @param {string} role -消息发送者的角色(“AI”或“User”)。默认是一个空字符串。
     * @param {string} content -要附加或连接的消息的内容。
     */
    appendMessage(role = '', content) {

      if (role === 'AI') {
        const lastMessage = this.messages[this.messages.length - 1];
        if (lastMessage && lastMessage.role === 'AI') {
          lastMessage.content += content;
        } else {
          this.messages.push({ role, content });
        }
      } else {
          const lastMessage = this.messages[this.messages.length - 1];
          if (lastMessage && lastMessage.role === 'User') {
            return;
        }
          this.messages.push({ role, content });
      }
    },

    // 检测是ai返回内容还是用户输入内容
    getMessageClass(role) {

      // console.log(role);
      if (role === 'ai' || role === 'Ai') {
        return 'message-ai';
      } else if (role === 'user' || role === 'User') {
        return 'message-user';
      } else {
        return 'message-ai'; // 返回默认值
      }
    },



    /**
     * 初始化和管理WebSocket连接。
     * -此功能:
     * -建立到指定服务器的WebSocket连接。
     * -处理各种WebSocket事件，如'open'， 'message'和'close'。
     * -处理来自服务器的传入消息并将它们附加到聊天中。
     * -如果服务器响应为空，则重试发送用户输入。
     */
    connectWebSocket() {

      // 链接websocket服务器
      this.socket = new WebSocket('ws://128.14.76.82:8000/ws/chat');
      this.socket.onopen = () => {
        console.log('WebSocket connection established.');
        this.sendButtonDisabled = false; // WebSocket连接成功，启用发送按钮
      };
      let counts = 0;
      this.socket.onmessage = (event) => {
        const message = JSON.parse(event.data);
        // console.log(message);
        if (message.delta && message.delta.content !== undefined) {
          // this.userInputList.pop()
          counts = 0;
          const content = message.delta.content;
          const finishReason = message.finish_reason;
          if (finishReason === 'stop') {
            this.sendButtonDisabled = false;
          }
          if (finishReason !== 'stop' || content !== undefined) {
            this.sendButtonDisabled = true;
            this.appendMessage('AI', content);
          }
        }else if(Object.keys(message).length === 0 && message.constructor === Object){
          console.log("test")
          counts++;
          this.sendUserInput(counts);
        }
      };
      this.socket.onclose = () => {
        console.log('WebSocket connection closed.');
      };
    },



    /**
     * Sends the user's input to the WebSocket server.
     *
     * This function:
     * - Checks if the user has provided any input.
     * - If there is input, it adds the input to the `userInputList`.
     * - Checks if the WebSocket connection is open.
     * - If the connection is open, it constructs a message object containing the user's input, the selected conversation ID, and a count.
     * - Sends the constructed message to the WebSocket server.
     * - Appends the user's message to the chat using the `appendMessage` function.
     * - Resets the user's input and enables the send button.
     * - If the WebSocket connection is not open, it logs an error message.
     *
     * @param {number} count - A count of the number of times the function has been called. Default is 0.
     */
    sendUserInput(count = 0) {

      if (this.userInput !== "") {
        this.userInputList.push(this.userInput)
      }
      if (this.socket.readyState === WebSocket.OPEN) {
        const message = {
          user_input: this.userInputList[this.userInputList.length - 1],
          conversation_id: this.selectedConversationId,
          count: count,
        };
        // console.log(message);
        this.socket.send(JSON.stringify(message));
        this.appendMessage('User', this.userInput);
        this.userInput = "";
        this.sendButtonDisabled = false;
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
        body: JSON.stringify({user_id: userId}),
      })
        .then(response => {
          localStorage.removeItem('loggedIn');
          localStorage.removeItem('username');
          Cookies.remove('token');
          this.user.loggedIn = false;
          this.user.username = '';
          this.messages = [];

          this.user.avatar = require('@/assets/logo.png');
          alert(response.data.message);
        })
        .catch(error => {
          console.error(error);
          // 处理错误
        });
      localStorage.setItem('userId', ''); // 将'username'设置为空值
      this.getConversationList();
    },
    goToLogin() {
      // 跳转至登录页面
      this.$router.push('/login');
    },
    deleteConversation(conversationId) {
      // 发送删除会话的请求
      const token = localStorage.getItem('token');

      const Data = {
        conversation_id: conversationId,
        user_id: localStorage.getItem("userId"),
        token: token,
      };

      fetch('http://128.14.76.82:8000/api/test/drop_conversation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: JSON.stringify(Data),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // 刷新会话列表
          this.messages = [];
          this.getConversationList();

        })
        .catch(error => {
          console.error(error);
          // 处理错误
        });
    },

    getProblem(text) {
      this.userInput = text;
    },


//   alterCodeStyle(rawText) {
//     // console.log(rawText);
//     // 检查是否存在 ``` 包围的内容
//     let regex = /```([\s\S]*?)```/g;
//     if (rawText) {
//       let replacedText = rawText.replace(regex, '<pre><code class="language">$1</code></pre>');
//       console.log(replacedText);
//     //   return replacedText;
//       return replacedText;
//     }
//     return rawText; // 返回原始文本
//   },
//
//     highlightAllCodeBlocks() {
//   // 使用 highlight.js 进行代码高亮
//     document.querySelectorAll('pre code').forEach((block) => {
//       hljs.highlightBlock(block);
//     });
// }

  },
  beforeDestroy() {
  // 移除滚动事件监听
  const chatLogContainer = this.$refs.chatLogContainer;
  chatLogContainer.removeEventListener('scroll', this.handleScroll);
  },
};




