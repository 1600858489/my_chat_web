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
            <p class="conversation">{{ conversation.conversation_name }}</p>
            <button class="delet-conversation" v-if="conversation.conversation_id === selectedConversationId" @click="deleteConversation(conversation.conversation_id)"></button>
          </li>
        </ul>

      </div>

      <div class="user-info">
        <hr style="width: 95%">
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

        <div v-if="messages.length === 0" class="default-message">
          <h1>全能助手</h1>

          <div class="tips-list">
            <div class="column">
              <div class="h-item">
                <div class="svg-image">
                   <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                   <g>
                    <path stroke="null" id="svg_5" d="m13.11085,11.27694c-0.04783,-0.07195 -0.10717,-0.14246 -0.18283,-0.19656c-0.32373,-0.23589 -0.78058,-0.16394 -1.01792,0.16163c-0.23694,0.32635 -0.16204,0.78249 0.16243,1.01905c0.29482,0.21363 0.68825,0.16241 0.9393,-0.08892l-6.88843,9.49601l-2.14152,7.77324l6.7238,-4.44915l15.31244,-21.10888l-4.58413,-3.32476l-1.47773,2.03732c-0.08454,-0.33891 -0.27329,-0.65711 -0.57922,-0.8811c-0.70978,-0.51465 -1.70209,-0.35896 -2.21642,0.35224c-2.94732,4.06583 -1.31345,5.14856 -4.04978,9.20988l0,0zm-3.37228,12.7096l-3.45867,2.28875l1.10135,-4.00192l2.35733,1.71317l0,0zm4.07426,-12.91652c2.12184,-3.13493 1.91974,-3.98497 3.73567,-6.76754c0.30039,0.20615 0.64525,0.27886 0.9838,0.26102l-4.71946,6.50653l0,0z" fill="#666666"/>
                   </g>
                  </svg>
                </div>

                <div class="tit">AI 创作</div>
              </div>
              <ul>
                <li class="q-preinstall" @click="getProblem('写一首赞美祖国的诗')">写一首赞美祖国的诗 →</li>
                <li class="q-preinstall" @click="getProblem('写一篇科幻小说')">写一篇科幻小说 →</li>
                <li class="q-preinstall" @click="getProblem('安排一场发布会流程')">安排一场发布会流程 →</li>
              </ul>
            </div>
            <div class="column">
              <div class="h-item">
                <div class="svg-image">
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                   <g>
                    <path stroke="null" id="svg_6" d="m29.42623,14.31974l-3.45116,0.19049l-0.92333,4.64123l-3.05315,-1.12208l-4.4278,3.56137l-1.68579,-2.07839l-14.19891,8.88813l7.88923,-9.91216l-6.55304,-1.28863l2.05056,-1.91728l-4.49906,-3.51894l3.23328,-0.85101l-1.01666,-4.63201l3.38946,0.48546l2.78852,-4.27445l2.4695,1.66779l5.70837,-2.55978l0.7655,2.32062l6.81585,-0.0324l-1.18154,2.23666l5.75934,2.50526l-2.75345,1.44258l2.87429,4.24753z" fill="#666666"/>
                   </g>

                  </svg>
                </div>
                <div class="tit">有趣的提问</div>
              </div>
              <ul>
                <li class="q-preinstall" @click="getProblem('有哪些有趣的科学实验')">有哪些有趣的科学实验 →</li>
                <li class="q-preinstall" @click="getProblem('问一个AI也答不出的问题')">问一个AI也答不出的问题 →</li>
                <li class="q-preinstall" @click="getProblem('AI会替代人类工作吗')">AI会替代人类工作吗 →</li>
              </ul>
            </div>
            <div class="column">
              <div class="h-item">
                <div class="svg-image">
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                   <g>
                    <title>Layer 1</title>
                    <path stroke="null" id="svg_10" d="m3.55605,22.17576l22.87048,0.00873l-0.74215,1.09687l-21.37741,-0.02619l-0.75092,-1.07941l0,0zm0.15717,-14.59085l22.56487,-0.02619l0.65486,1.12522l-23.88333,0.00873l0.6636,-1.10776zm-2.22688,7.31128l27.00115,-0.02619l-0.0349,1.12522l-26.94878,-0.01746l-0.01746,-1.08156zm27.0235,0.10436c0,7.44923 -6.06115,13.50926 -13.51254,13.50926c-7.44817,0 -13.50819,-6.06112 -13.50819,-13.50926c0,-7.44817 6.06112,-13.5082 13.50819,-13.5082c7.45139,-0.00109 13.51254,6.06002 13.51254,13.5082zm-13.51148,-14.59085c-8.04272,0 -14.58757,6.54484 -14.58757,14.58976c0,8.04601 6.54484,14.59085 14.58757,14.59085c8.0471,0 14.59085,-6.54484 14.59085,-14.59085c0,-8.04491 -6.54375,-14.58976 -14.59085,-14.58976zm4.09368,14.59085c0,7.96012 -2.15663,13.50926 -4.09368,13.50926c-1.93486,0 -4.09146,-5.54913 -4.09146,-13.50926c0,-7.96232 2.15553,-13.5082 4.09146,-13.5082c1.93596,-0.00109 4.09368,5.54588 4.09368,13.5082zm-4.09368,-14.59085c-3.3599,0 -5.17302,7.5177 -5.17302,14.58976c0,7.07422 1.81312,14.59085 5.17302,14.59085c3.35993,0 5.17634,-7.51773 5.17634,-14.59085c-0.0011,-7.07206 -1.81641,-14.58976 -5.17634,-14.58976zm9.58738,14.59085c0,7.44923 -4.30237,13.50926 -9.58738,13.50926c-5.28391,0 -9.58409,-6.06112 -9.58409,-13.50926c0,-7.44817 4.30018,-13.5082 9.58409,-13.5082c5.28501,-0.00109 9.58738,6.06002 9.58738,13.5082zm-9.58738,-14.59085c-5.8796,0 -10.66566,6.54484 -10.66566,14.58976c0,8.04601 4.78606,14.59085 10.66566,14.59085c5.88179,0 10.66679,-6.54484 10.66679,-14.59085c0,-8.04491 -4.785,-14.58976 -10.66679,-14.58976z" fill="#666666"/>
                   </g>

                  </svg>
                </div>
                <div class="tit">AI 百科</div>
              </div>
              <ul>
                <li class="q-preinstall" @click="getProblem('简单解释一下人工智能')">简单解释一下人工智能 →</li>
                <li class="q-preinstall" @click="getProblem('红烧牛肉的做法')">红烧牛肉的做法 →</li>
                <li class="q-preinstall" @click="getProblem('请介绍一下百度文心')">请介绍一下百度文心 →</li>
              </ul>
            </div>
          </div>

        </div>

        <div v-for="(message, index) in messages" :key="index" :class="getMessageClass(message.role)">
          <strong>{{ message.content }}</strong>
<!--          <pre>-->
<!--            <code class="language-javascript">-->
<!--            def add_numbers(a, b):-->
<!--                """-->
<!--                This function takes two numbers as arguments and returns their sum.-->

<!--                Parameters:-->
<!--                - a (int/float): The first number.-->
<!--                - b (int/float): The second number.-->

<!--                Returns:-->
<!--                - int/float: The sum of a and b.-->
<!--                """-->
<!--                return a + b-->

<!--            # Test the function-->
<!--            result = add_numbers(3, 5)-->
<!--            print(f"The sum of 3 and 5 is: {result}")-->
<!--            </code>-->
<!--          </pre>-->
<!--          <strong>{{ message.role }}: {{ message.content }}</strong>-->
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

<script src="./js/homePage.js">
import 'prism/prism.js';

</script>
<!--<script src="./js/homePageEffects.js"></script>-->

<style src="./css/homePage.css">
@import 'prism/themes/prism.css';
</style>