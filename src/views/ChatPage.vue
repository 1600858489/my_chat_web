//test


<template>
  <div>
    <div id="chat-log">
      <p v-for="(message, index) in messages" :key="index" :class="getMessageClass(message.role)">
        <strong>{{ message.role }}: </strong>{{ message.content }}
      </p>
    </div>
    <div class="user-input-container">
      <input type="text" v-model="userInput" @keydown.enter="sendUserInput" />
      <button :disabled="sendButtonDisabled" @click="sendUserInput">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      userInput: '',
      sendButtonDisabled: true,
      socket: null,
    };
  },
  created() {
    this.connectWebSocket();
  },
  methods: {
    appendMessage(role = '', content) {
      if (role === 'AI') {
        const lastMessage = this.messages[this.messages.length - 1];
        if (lastMessage && lastMessage.role === 'AI') {
          lastMessage.content += content;
        } else {
          this.messages.push({ role, content });
        }
      } else {
        // this.messages.push({ role, content });
        if (content !== undefined && content !== null) { // 检查内容是否为 undefined
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
        const content = message.delta.content;
        const finishReason = message.finish_reason;

        if (finishReason === 'stop') {
          this.sendButtonDisabled = false;
        }

        if (finishReason !== 'stop' || content !== undefined) {
          this.appendMessage('AI', content);
        }
      };

      this.socket.onclose = () => {
        console.log('WebSocket connection closed.');
      };
    },


    sendUserInput() {
      if (this.socket.readyState === WebSocket.OPEN) {
        const message = {
          user_input: this.userInput,
        };
        this.socket.send(JSON.stringify(message));
        this.appendMessage('User', this.userInput);
        this.userInput = '';
        this.sendButtonDisabled = true;
      } else {
        console.log('WebSocket connection is not open yet.');
      }
    },
  },
};
</script>

<style>
#chat-log {
  overflow-y: scroll;
  height: 300px;
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
