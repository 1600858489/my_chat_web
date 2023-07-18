<template>
  <div class="main">
    <div class="sidebar">
<!--      <h3>会话列表</h3>-->
      <div class="new-conversation" >
        <button class="new-conversation-button" @click="openCreateConversationModal">新建会话</button>
        <hr style="width: 95%">
      </div>


      <div class="conversation-list">
        <ul>
          <li v-for="conversation in conversations" :key="conversation.conversation_id" @click="selectConversation(conversation.conversation_id)" :class="{ 'selected': conversation.conversation_id === selectedConversationId }">
            {{ conversation.conversation_name }}
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
        <div v-for="(message, index) in messages" :key="index" :class="getMessageClass(message.role)">
          <strong>{{ message.role }}: {{ message.content }}</strong>
        </div>
      </div>

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

<style src="./css/homePage.css"></style>