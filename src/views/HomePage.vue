<template>
  <div class="main">
    <div class="sidebar">
<!--      <h3>会话列表</h3>-->
      <div class="new-conversation" >
        <button class="new-conversation-button" @click="openCreateConversationModal">新建会话</button>
<!--        <img src="./logo.png">-->
        <hr style="width: 95%">
      </div>


      <div class="conversation-list">
        <ul>
          <li v-for="conversation in conversations" :key="conversation.conversation_id" @click="selectConversation(conversation.conversation_id)" :class="{ 'selected': conversation.conversation_id === selectedConversationId }">
            {{ conversation.conversation_name }}
            <button class="delet-conversation" v-if="conversation.conversation_id === selectedConversationId" @click="deleteConversation(conversation.conversation_id)"></button>
          </li>
        </ul>

      </div>

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
<!--      <div ref="chatLogContainer" class="chat-log" :class="{'scroll-to-bottom-transition': Skip2Latest}">-->

        <div v-for="(message, index) in messages" :key="index" :class="getMessageClass(message.role)">
          <strong>{{ message.role }}: {{ message.content }}</strong>
        </div>
      </div>
      <button class="gotofloor" @click="Skip2Latest">
        <svg
          stroke="#000000"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4 m-1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </button>
      <div class="user-input-container">
        <input class="user_input" type="text" v-model="userInput" @keydown.enter="sendUserInput" />
        <button :disabled="sendButtonDisabled" @click="sendUserInput">Send</button>
      </div>
    </div>

      <div v-if="showCreateConversationModal" class="modal-overlay">
        <div class="modal">
          <h3>新建会话</h3>
          <input type="text" v-model="newConversationName" @input="handleConversationNameInput" />
          <div class="button-container">
            <button @click="createNewConversation">创建</button>
            <button @click="closeCreateConversationModal">取消</button>
          </div>
        </div>
      </div>

  </div>
</template>

<script src="./js/homePage.js"></script>
<!--<script src="./js/homePageEffects.js"></script>-->

<style src="./css/homePage.css"></style>