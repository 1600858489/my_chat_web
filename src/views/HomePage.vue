<template>
  <div class="main">
    <div class="menus">
      <div class="bar">
        <div class="funC">
          <svg :style="{ fill: svgColors.svgElement1, stroke: svgColors.svgElement1 }"
          v-on:click="showPage(0)" class="clickable-svg" ref="svgElement1" @click="handleSVGClick($event, 'svgElement1')"
          width="74" height="35.06" xmlns="http://www.w3.org/2000/svg">
            <g>
              <title stroke="null">
                对话
              </title>
              <path stroke-width="0.1" d="m34.51102,6.02463c-12.82996,0 -23.23255,4.97631 -23.23255,11.11533c0,3.5114 3.4149,6.64003 8.7317,8.67628c-0.75651,1.80528 -2.26624,3.80477 -5.18416,5.57325c0,0 6.81105,-0.32454 11.6218,-3.83642c0.27695,0.0489 0.56363,0.08571 0.8432,0.13086c-0.26275,-0.56437 -0.41742,-1.15107 -0.41742,-1.76153c0,-4.14187 6.40596,-7.38506 14.58758,-7.38506c5.87654,0 10.8213,1.67955 13.14897,4.15772c1.98154,-1.63581 3.13341,-3.5305 3.13341,-5.55651c0,-6.13761 -10.40258,-11.11391 -23.23253,-11.11391l0,0l-0.00001,0l0,-0.00001zm19.83964,19.89872c0,-3.40526 -5.76978,-6.16788 -12.89142,-6.16788c-7.11775,0 -12.8908,2.76264 -12.8908,6.16788c0,3.40708 5.77304,6.16833 12.8908,6.16833c1.57638,0 3.07773,-0.14203 4.4736,-0.38972c2.66875,1.94964 6.44796,2.1289 6.44796,2.1289c-1.61843,-0.98159 -2.45452,-2.09076 -2.87519,-3.09328c2.94834,-1.1287 4.84504,-2.86462 4.84504,-4.81424l0.00001,0l0,0.00001z"
              id="svg_15" />
            </g>
          </svg>
          <span>
            对话
          </span>
          <svg :style="{ fill: svgColors.svgElement2, stroke: svgColors.svgElement2 }"
          v-on:click="showPage(1)" class="clickable-svg" ref="svgElement2" @click="handleSVGClick($event, 'svgElement2')"
          width="74" height="60" xmlns="http://www.w3.org/2000/svg" style="vector-effect: non-scaling-stroke;">
            <g id="Layer_1">
              <title stroke="null">
                角色
              </title>
              <path stroke-width="0.1" id="svg_1" d="m15.59153,27.66552c1.97165,-0.34931 4.02374,-0.57929 5.69003,-0.64155l0.29386,-0.01038c-0.06731,-0.15563 -0.1182,-0.26111 -0.13462,-0.27668c-0.03612,-0.03113 -0.06567,-0.16255 -0.06895,-0.29051c0,-0.0709 -0.02955,-0.30089 -0.07552,-0.60523c-0.45146,0.01729 -1.05067,0.03113 -1.70406,0.03631c-2.52325,0.02075 -5.16306,0.23518 -6.97382,0.57238c-1.07858,0.20059 -1.43482,0.19367 -0.63861,-0.01038c0.80606,-0.20578 3.19633,-0.5084 5.10067,-0.63982c1.27886,-0.09165 3.11261,-0.12623 4.19283,-0.10721c-0.03119,-0.19713 -0.06731,-0.41675 -0.10507,-0.64155c-0.15268,-0.86981 -0.20357,-1.7448 -0.20685,-3.48614c-0.00328,-2.70107 0.13462,-3.44464 0.97023,-5.23094c0.33983,-0.72974 0.72398,-1.3488 1.18857,-1.90908c-0.40549,-1.26061 -0.39564,-3.21292 0.02463,-4.92486c0.34639,-1.40414 0.46788,-1.49406 1.67615,-1.2243c1.0244,0.22999 1.84524,0.54298 2.89755,1.10152c0.49743,0.26457 1.18365,0.67613 1.68107,0.9995c1.29692,-0.48073 2.63817,-0.79891 4.0697,-0.9701c1.45124,-0.17292 5.00874,-0.07609 6.27119,0.16947c1.23454,0.24036 2.34595,0.53433 3.35229,0.88364c0.50235,-0.32683 1.23125,-0.76778 1.75166,-1.04446c1.05724,-0.56027 1.87807,-0.87153 2.90576,-1.10152c1.20499,-0.27149 1.32975,-0.17984 1.67451,1.2243c0.42683,1.73442 0.43012,3.71959 0.00821,4.97674c-0.04925,0.14353 -0.0788,0.24555 -0.09029,0.3251c1.71062,2.26876 2.26879,4.80727 1.89777,8.35048c-0.09686,0.92341 -0.24625,1.77074 -0.45474,2.54716c1.09171,-0.00692 2.64473,0.03458 3.766,0.11067c1.90762,0.13315 4.2979,0.43231 5.10396,0.63809c0.79457,0.20405 0.44161,0.21097 -0.63861,0.0121c-1.81076,-0.33547 -4.45221,-0.55336 -6.97382,-0.57238c-0.47608,-0.00173 -0.92098,-0.0121 -1.30349,-0.02248c-0.11492,0.40983 -0.24625,0.80064 -0.39564,1.17242l0.01149,0.00173c1.6663,0.06052 3.71674,0.29051 5.68839,0.63982c1.47915,0.26111 3.66257,0.78334 3.91703,0.93379c0.26759,0.15736 0.04925,0.12278 -1.09664,-0.1833c-2.08985,-0.55681 -4.80682,-0.98393 -8.17224,-1.28136l-0.37594,-0.03458c-0.72234,1.76728 -1.83539,3.11608 -3.40811,4.16746c-0.96202,0.645 -2.50355,1.3073 -3.28006,1.41106c-0.21342,0.02767 -0.83397,0.16255 -1.379,0.29743c-0.54668,0.13488 -1.61541,0.3372 -2.37386,0.45306l-0.01806,0c0.01478,0.01038 0.02791,0.01729 0.04104,0.02767c0.91934,0.50321 1.5169,1.28655 1.91911,2.5195c0.18058,0.05706 0.40549,0.13488 0.64846,0.22307c0.86844,0.31126 1.20663,0.37524 2.08656,0.38216c0.91277,0.00692 1.12947,-0.03458 1.67451,-0.30435c0.79293,-0.38908 1.53168,-1.10498 2.02418,-1.95922c0.82248,-1.42835 2.24417,-2.43822 3.42945,-2.43822c1.01291,0 1.20499,0.43231 0.4728,1.06348c-1.1032,0.94935 -1.92732,1.91772 -2.26551,2.65783c-0.19043,0.41502 -0.48265,1.05656 -0.65174,1.42489c-0.17894,0.39254 -0.56145,0.92514 -0.9259,1.29347c-0.85695,0.86116 -1.68436,1.27272 -2.91889,1.46639c-0.8274,0.12796 -1.03097,0.12796 -2.00776,-0.00346c-0.47116,-0.06052 -0.86844,-0.13142 -1.22469,-0.21961c0,0.42193 0,0.90785 0,1.4785c0,3.05383 0.03448,4.03604 0.14939,4.32309c0.2167,0.54644 0.70264,1.10844 1.17544,1.36091c0.47116,0.25247 0.61727,0.53088 0.41863,0.7868c-0.10999,0.13834 -0.32177,0.16255 -1.03261,0.11413c-1.34945,-0.08819 -2.30327,-0.61388 -2.7892,-1.54075c-0.15596,-0.29743 -0.19208,-0.89574 -0.24133,-4.00837c-0.05253,-3.3772 -0.07552,-3.70229 -0.28401,-4.18475c-0.12641,-0.28705 -0.30863,-0.59832 -0.41042,-0.68305c-0.17073,-0.14871 -0.18223,0.14526 -0.18223,4.18475c0.00164,4.45797 0.04433,4.99576 0.46788,5.85346c0.09522,0.1954 0.2758,0.4496 0.40221,0.57065c0.22163,0.2127 0.3152,0.75741 0.16088,0.92168c-0.25446,0.2663 -1.53004,-0.15217 -2.22611,-0.72974c-1.18529,-0.98912 -1.32647,-2.0127 -1.33632,-7.91977l-0.00493,-3.25974l-0.35953,0.03631l-0.35953,0.03458l-0.0591,4.53233c-0.06731,5.10297 -0.07716,5.17733 -0.90128,6.16299c-0.46788,0.55681 -0.93904,0.86462 -1.7057,1.10498c-1.02604,0.3251 -1.33468,-0.17638 -0.64518,-1.04619c0.75024,-0.94589 0.78636,-1.3073 0.74532,-6.90657c-0.02791,-3.58989 -0.02791,-3.58989 -0.24789,-3.38066c-0.46295,0.44268 -0.5516,1.16896 -0.5516,4.53578c0,4.18129 -0.11328,4.57902 -1.51526,5.30875c-0.65503,0.3372 -0.83889,0.3787 -1.67779,0.38216c-0.89307,0.00346 -0.94724,-0.01038 -0.98008,-0.25593c-0.02791,-0.19886 0.08208,-0.33374 0.49907,-0.60177c0.54668,-0.35449 0.9259,-0.80755 1.16395,-1.3782c0.09029,-0.21961 0.15103,-1.65834 0.19208,-4.62052c0.0591,-4.13806 0.07223,-4.32655 0.31684,-4.97501c0.32998,-0.87153 0.83397,-1.55977 1.47258,-2.01629c0.16581,-0.11413 0.33162,-0.20924 0.54668,-0.28014c-0.26431,-0.02767 -0.52041,-0.05706 -0.7683,-0.09511c-2.58071,-0.36141 -3.94494,-0.6623 -5.03993,-1.10844c-2.3164,-0.93897 -3.88255,-2.49875 -4.7313,-4.71044c-0.07552,-0.19713 -0.15103,-0.38389 -0.21506,-0.53433l-0.65339,0.05706c-3.36707,0.29916 -6.08404,0.72628 -8.17388,1.28482c-1.14589,0.30607 -1.36423,0.34239 -1.09664,0.18157c0.24953,-0.14699 2.43296,-0.66748 3.91046,-0.9286zm9.87301,-0.05361c0.38251,0.88537 1.4496,2.02321 2.31147,2.46935c0.85039,0.44268 2.18342,0.77989 3.69376,0.9407c1.03261,0.11067 6.7916,0.14353 7.74212,0.04496c3.14708,-0.3251 4.91024,-0.96318 6.21044,-2.24109c1.23125,-1.21392 1.80584,-2.86188 1.7057,-4.89028c-0.06403,-1.26926 -0.3546,-2.06644 -1.1147,-3.03481c-0.69114,-0.88191 -1.4184,-1.42662 -2.27536,-1.7033c-0.71741,-0.23172 -2.91889,-0.25247 -5.87883,-0.05188c-1.30841,0.08819 -2.39027,0.08819 -3.69704,0c-3.09619,-0.20578 -5.16306,-0.1833 -5.92644,0.06571c-1.20006,0.39081 -2.29342,1.44218 -2.95008,2.84286c-0.2955,0.62598 -0.35296,0.89229 -0.39564,1.85893c-0.0591,1.33151 0.15924,2.74603 0.57459,3.69883zm15.6123,-5.71685c1.76151,-0.3251 2.76786,2.85151 1.41676,4.47353c-0.64189,0.76951 -1.21155,0.89574 -1.92404,0.42885c-0.65995,-0.43404 -1.01784,-1.24505 -1.01784,-2.29642c0,-1.40241 0.60578,-2.43303 1.52511,-2.60596zm-10.69221,0.19022c1.76151,-0.3251 2.7695,2.84805 1.4184,4.4718c-0.64354,0.76951 -1.21155,0.89747 -1.92568,0.42712c-0.65831,-0.43231 -1.01784,-1.24505 -1.01784,-2.29642c0,-1.39722 0.60578,-2.4313 1.52511,-2.6025zm4.73786,6.246c0.03776,0.12796 0.22163,0.31818 0.40713,0.4202c0.46952,0.2542 0.8077,0.16601 1.30349,-0.30953c0.30699,-0.29224 0.44653,-0.44614 0.54011,-0.14007c0.08701,0.28359 -0.45967,0.85251 -0.88158,1.02717c-0.38743,0.16255 -0.66488,0.16774 -1.08515,-0.01729c-0.41698,-0.1833 -0.78144,-0.67613 -0.78144,-0.99604c0,-0.29743 0.40549,-0.28359 0.49743,0.01556zm0.52041,-0.99431c-0.26759,-0.24901 -0.32833,-0.76086 -0.07223,-1.03235s0.77651,-0.22999 0.98008,0.07436c0.2364,0.35622 0.10999,0.62771 -0.0591,0.91649c-0.26267,0.21443 -0.61563,0.25766 -0.84874,0.0415z"
              />
            </g>
          </svg>
          <span>
            角色
          </span>
          <!-- <a href="#/教程" target="_blank">-->
          <a href="/tutorial.html" class="tutorial-link" target="_blank">
            <svg :style="{ fill: svgColors.svgElement3, stroke: svgColors.svgElement3 }"
            class="clickable-svg" ref="svgElement3" @click="handleSVGClick($event, 'svgElement3')"
            id="my-svg" width="70" height="39.99999999999999" xmlns="http://www.w3.org/2000/svg"
            stroke="#666666">
              <g stroke="null">
                <title stroke="null">
                  Layer 1
                </title>
                <path id="svg_20" d="m374,218c-1,-1 -4.05334,-4.96837 -7,-10c-4.07422,-6.95706 -6.83179,-11.52216 -10,-18c-1.38934,-2.84073 -3.98691,-5.75711 -5,-12c-0.48056,-2.96126 -2.14774,-5.94341 -4,-11c-1.08768,-2.96933 -2.44519,-8.03867 -3,-12c-1.00977,-7.20975 -2,-12 -2,-20c0,-8 0,-14 0,-19c0,-6 0,-11 0,-14c0,-4 -0.63834,-8.3054 2,-13c2.44962,-4.35883 8,-12 13,-17c6,-6 11.70425,-11.40069 17,-15c6.66794,-4.53193 13,-7 19,-10c6,-3 13.02756,-5.91912 19,-8c11.05304,-3.85103 17.45871,-4.66397 25,-8c3.29733,-1.45864 8.82376,-2.48626 11,-3c1.9465,-0.45951 3.0535,-0.45951 5,0c2.17624,0.51374 3.11215,1.9183 6,6c2.08246,2.94336 5.3851,7.37201 8,11c3.30762,4.58908 7.724,7.22273 11,11c4.63297,5.34187 9,9 12,13c3,4 4.71933,6.56511 7,10c2.76575,4.16542 5.41589,4.76108 7,8c1.38934,2.84072 2.33749,4.31001 4,7c1.487,2.40601 3.9176,2.38687 5,5c0.38269,0.92388 -0.05145,2.2987 1,4c1.1756,1.90211 2,2 2,4c0,1 1,2 1,4c0,1 0,2 0,3c0,2 0,3 0,4c0,2 1,2 1,3c0,1 0,2 0,3c0,2 -0.38269,3.07612 0,4c0.5412,1.30656 1,3 1,4c0,1 0,3 0,4c0,1 -1.41418,2.58578 0,4c0.70709,0.70711 1,1 1,2c0,1 0,4 0,6c0,1 0,4 0,5c0,2 -1,2 -1,3c0,1 -1.31073,4.08025 -2,7c-0.51373,2.17625 -2.29291,3.29289 -3,4c-1.41418,1.41422 -1,4 -2,6c-1,2 -2.61731,3.07613 -3,4c-1.0824,2.61313 -3.71411,3.21167 -6,6c-0.89661,1.09367 -3,3 -4,4c-1,1 -2.86829,2.28859 -7,4c-5.84314,2.4203 -6.54916,3.95517 -10,5c-0.95709,0.28978 -7,1 -10,3c-3,2 -4.87857,2.49345 -8,3c-0.98709,0.16019 -2.08582,-0.57957 -4,0c-3.45084,1.04483 -4.03873,1.51945 -7,2c-3.12143,0.50655 -7.83807,2.46552 -13,4c-4.88763,1.45294 -9.75711,3.98692 -16,5c-2.96127,0.48055 -5.54916,0.95517 -9,2c-0.95709,0.28978 -2,0 -3,0c-5,0 -9.17163,-0.15913 -13,1c-6.9017,2.08966 -12,4 -14,5l-2,1l-3,1l-3,0"
                />
                <path id="svg_8" d="m20.07317,24.52439" opacity="NaN" />
                <path d="m39.94894,11.54933c-1.73683,-1.61772 -3.61009,-2.91361 -5.14674,-3.09028c-0.08365,-0.01146 -0.1703,-0.01814 -0.26192,-0.02005l-10.11323,0c-0.16133,0 -0.32068,0.06016 -0.43421,0.17189c-0.11254,0.10887 -0.17926,0.26166 -0.17926,0.41732l0,24.59042c0,0.1547 0.06274,0.30272 0.17926,0.41541c0.11652,0.11078 0.26989,0.17094 0.43421,0.17094l18.28846,0c0.16133,0 0.3157,-0.05921 0.43221,-0.17094c0.11652,-0.11173 0.18125,-0.25975 0.18125,-0.41541l0,-16.36338c-0.03585,-1.89943 -1.58744,-3.97076 -3.38004,-5.70593l0.00001,0.00001zm2.15112,21.47818l-17.06153,0l0,-23.4139l9.50275,0l0,0.00191c0.41429,-0.02387 0.77181,0.36862 1.04568,1.26629c0.24897,0.8547 0.31171,1.96914 0.31072,2.74171c0.00199,0.5663 -0.02689,0.94637 -0.02689,0.94637l-0.0488,0.62264l0.6533,0.00668c0.00299,0 1.50976,0.01719 2.98766,0.33901c1.42013,0.29413 2.53055,0.88048 2.63412,1.54418c0.00398,0.05921 0.00498,0.11842 0.00398,0.1738l0,15.7713l-0.001,0l0.00001,0.00001z"
                id="svg_1" />
                <path id="svg_5" d="m39.06799,13.19274c1.34256,-2.43964 6.60277,0 0,3.13667c-6.60277,-3.13667 -1.34256,-5.57631 0,-3.13667z"
                fill="#666666" />
              </g>
            </svg>
          </a>
          <span>
            教程
          </span>
        </div>
        <div class="user-info">
          <hr style="width: 95%" />
          <div class="user-avatar" :class="{ 'grayed-out': !user.loggedIn }" @click="openProfileModal">
            <img :src="user.avatar" alt="User Avatar" />
          </div>
          <span class="login-status">
            {{ user.loggedIn ? user.username : '未登录' }}
          </span>
          <button v-if="user.loggedIn" @click="logout" class="logout">
            退出登录
          </button>
          <button v-else @click="goToLogin" class="login">
            登录
          </button>
        </div>
      </div>
      <div class="sidebar func01" v-if="showingPage===0">
        
        <div class="module-header">
          <div class="module-title">
            <div class="btn-group-add">
              <span @click="openCreateConversationModal">
                +&nbsp;新会话
              </span>
            </div>
          </div>
        </div>
        <div v-if="showCreateConversationModal" class="modal-overlay">
          <div class="modal">
            <h3>
              新建会话
            </h3>
            <input type="text" v-model="newConversationName" @input="handleConversationNameInput"
            @keydown.enter.prevent="createNewConversationOnEnter" />
            <div class="button-container">
              <button @click="createNewConversation">
                创建
              </button>
              <button @click="closeCreateConversationModal">
                取消
              </button>
            </div>
          </div>
        </div>
        <div class="conversation-list">
          <div class="module-body">
            <div class="el-scrollbar">
              <div class="scrollbar-wrapper el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -15px;">
                <div class="el-scrollbar__view">
                  <div class="group-chat">
                    <ul>
                      <li v-for="conversation in conversations" :key="conversation.conversation_id"
                      @click="selectConversation(conversation.conversation_id)" :class="{ 'selected': conversation.conversation_id === selectedConversationId }">
                        <div class="group-title" :title="conversation.conversation_name">
                          {{ conversation.conversation_name }}
                        </div>
                        <button class="delet-conversation" v-if="conversation.conversation_id === selectedConversationId"
                        @click="deleteConversation(conversation.conversation_id)">
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="module-footer">
                    <div class="box-vip">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAES0lEQVRIiY2Xz2tdRRTHP+f1GbFdNKUk8SeIaLty0UpRxEUDJtlZyCI1+BcYpQayFqToqhsFE/eCmqiIDQFJJP7ApdZC1UWJtWDbhWlCE0VaX5175M6duXPmvpeYgfvm3pnza86c8z3niS6yl3EPMAaMACeAx4D+wLcF/AZ8D3wJLAN3/0+m6PnyF1C7Gr6FfpRpYAoY2JOJyAaisyhvB6N6kJSKP88UWQNeBM88lFuzq1JL8wd4o+d7UbY8XRHonZ/3ocyhfIQyVO+phlnC3Os90FQ8Q0HGHIWXGWgq/rYnSicuCT4GxmsP0DyoJu9kG+FdvR8r5ZUTXvZGwASoi4sta4W/l4Lxmqmwj6T3eMqutXDqwthS7ZUy30m0Gl3tiU/jeLUW0jVrclXRa1+iHGpDNaN5BZXTkV90wdvWj8hlVAdT2EW32oAJvpfga22sl3Ri17vGOshRRLeiq6cpGKxd592lMdjCWjxROJUzrq6DT8CZACsa/FrqYLo68YfSB1wHHegZUOX3xN+wbz/cvgGte+Hq+3BxppGHwPAyHDoGRQfuexB+eRMuvZ6nm3ITeLhNoaMVOEiK2Fp7kHvtPAw+B/sfqdYOPFqd1kb186swNJy+17+FS2+lQEtGDoCOtigY7YpetUGi8N1L8MNMEtrZTrTlc3IpV3p9CZaH4d9/Ek2WGTLWRuV4DpcmHSyc9R02NH3pTsdW4X6j9NoifHWqgWLGg9U43sbpkXzTElmXt9L7X1cq60e+yJVeXYBvJg275Lo1RD080UY5mE4s2VStx9Qx9rQOwFPn4KGxtPb7Enw9mWJEMJ7rOsjBNk52KhI5sV1/ciYnubEKyy/0zoheKS0VVm/vqeR1WR/GxkVYGom1rnd5te/VvF0qXuutuGFuL8tvXoBPn96FYEeZa2U6XcjTKTwuIFdBQjA7Nn+CT54FV1SB5pr8Jj0jyrmYpvJjqXglY3IG6nyNllQk4tj+FRaeAXc3h8fIHw11GAjNoHSl7RUrm8Dh2h1ZEQjvRbjkjfKkJ6FzJy8mmMbAFwvSWobFJWTqcgtHB+XdrPy5hqvKeeAYdP6ED07AnVuNK4nu1IR6Trqvr0LCOVQ6oudKS6Qf9DLIYG6tCYjHT8HWFdj8Ocfz2juYqG4Epv/0niwLxBFUttqhayi7wTMI8xmY2PRYWzRFxLg3olMEjPo7XpVYA86gVefZqgLBA/kChc7mgWLA3ZnCoZLA3xmX2+7EmQCtrnEWJ/Op2Ysb/nTyGsoDiI5nUBldBd0gYf0ZG4IaMiUG2mdetnFUK++ZcKhOUPBe3UPZVKArULq/Y2THTkallDXhZRvaVuqLa0aHyhSFTqKy3t1h9uirbZeZMGAdlUmUKbRUGowMvXd14uzu6miep+Aoylmf5zFNmoDRbIVL2oKznreglJGM8nSxy3zD1NmdR/zTVrZJ8U/boUB+y/xpWwlPZ1dpwH95sqWkKGg8VQAAAABJRU5ErkJggg=="
                      class="icon">
                      <div class="title">
                        开通会员
                      </div>
                      <div class="desc">
                        高速通道 无限对话
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sidebar func02" v-if="showingPage === 1">
        <div class="module-header">
          <div class="search">
            <div class="el-input el-input--large el-input--prefix el-input--suffix">
              <input type="text" v-model="searchText" autocomplete="" placeholder="搜索模型"
              class="el-input__inner" @input="searchModels">
              <span class="el-input__prefix">
                <i class="el-input__icon el-icon-search">
                </i>
              </span>
            </div>
          </div>
        </div>
        <div class="module-body">
          <div class="el-scrollbar">
            <div class="scrollbar-wrapper el-scrollbar__wrap" style="margin-bottom: -15px; margin-right: -15px;">
              <div class="el-scrollbar__view">
                <ul id="modelList">
                  <li v-for="item in filteredModels" :key="item.id" class="model-item" @mouseenter="showFullMessage(item.id)"
                  @mouseleave="hideFullMessage(item.id)" @click="newRoleConversation(item.title,item.promptMessage,item.example)">
                    <p class="title">
                      {{ item.title }}
                    </p>
                    <p class="message" :class="{ 'show-all': item.showAll }">
                      {{ item.primary_infor }}
                    </p>
                  </li>
                </ul>
                <div class="module-footer">
                  <div class="box-vip">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAES0lEQVRIiY2Xz2tdRRTHP+f1GbFdNKUk8SeIaLty0UpRxEUDJtlZyCI1+BcYpQayFqToqhsFE/eCmqiIDQFJJP7ApdZC1UWJtWDbhWlCE0VaX5175M6duXPmvpeYgfvm3pnza86c8z3niS6yl3EPMAaMACeAx4D+wLcF/AZ8D3wJLAN3/0+m6PnyF1C7Gr6FfpRpYAoY2JOJyAaisyhvB6N6kJSKP88UWQNeBM88lFuzq1JL8wd4o+d7UbY8XRHonZ/3ocyhfIQyVO+phlnC3Os90FQ8Q0HGHIWXGWgq/rYnSicuCT4GxmsP0DyoJu9kG+FdvR8r5ZUTXvZGwASoi4sta4W/l4Lxmqmwj6T3eMqutXDqwthS7ZUy30m0Gl3tiU/jeLUW0jVrclXRa1+iHGpDNaN5BZXTkV90wdvWj8hlVAdT2EW32oAJvpfga22sl3Ri17vGOshRRLeiq6cpGKxd592lMdjCWjxROJUzrq6DT8CZACsa/FrqYLo68YfSB1wHHegZUOX3xN+wbz/cvgGte+Hq+3BxppGHwPAyHDoGRQfuexB+eRMuvZ6nm3ITeLhNoaMVOEiK2Fp7kHvtPAw+B/sfqdYOPFqd1kb186swNJy+17+FS2+lQEtGDoCOtigY7YpetUGi8N1L8MNMEtrZTrTlc3IpV3p9CZaH4d9/Ek2WGTLWRuV4DpcmHSyc9R02NH3pTsdW4X6j9NoifHWqgWLGg9U43sbpkXzTElmXt9L7X1cq60e+yJVeXYBvJg275Lo1RD080UY5mE4s2VStx9Qx9rQOwFPn4KGxtPb7Enw9mWJEMJ7rOsjBNk52KhI5sV1/ciYnubEKyy/0zoheKS0VVm/vqeR1WR/GxkVYGom1rnd5te/VvF0qXuutuGFuL8tvXoBPn96FYEeZa2U6XcjTKTwuIFdBQjA7Nn+CT54FV1SB5pr8Jj0jyrmYpvJjqXglY3IG6nyNllQk4tj+FRaeAXc3h8fIHw11GAjNoHSl7RUrm8Dh2h1ZEQjvRbjkjfKkJ6FzJy8mmMbAFwvSWobFJWTqcgtHB+XdrPy5hqvKeeAYdP6ED07AnVuNK4nu1IR6Trqvr0LCOVQ6oudKS6Qf9DLIYG6tCYjHT8HWFdj8Ocfz2juYqG4Epv/0niwLxBFUttqhayi7wTMI8xmY2PRYWzRFxLg3olMEjPo7XpVYA86gVefZqgLBA/kChc7mgWLA3ZnCoZLA3xmX2+7EmQCtrnEWJ/Op2Ysb/nTyGsoDiI5nUBldBd0gYf0ZG4IaMiUG2mdetnFUK++ZcKhOUPBe3UPZVKArULq/Y2THTkallDXhZRvaVuqLa0aHyhSFTqKy3t1h9uirbZeZMGAdlUmUKbRUGowMvXd14uzu6miep+Aoylmf5zFNmoDRbIVL2oKznreglJGM8nSxy3zD1NmdR/zTVrZJ8U/boUB+y/xpWwlPZ1dpwH95sqWkKGg8VQAAAABJRU5ErkJggg=="
                    class="icon">
                    <div class="title">
                      开通会员
                    </div>
                    <div class="desc">
                      高速通道 无限对话
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div id="chat-log">
        <div v-if="messages.length === 0" class="default-message">
          <h1>
            全能助手
          </h1>
          <div class="tips-list">
            <div class="column">
              <div class="h-item">
                <div class="svg-image">
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path stroke="null" id="svg_5" d="m13.11085,11.27694c-0.04783,-0.07195 -0.10717,-0.14246 -0.18283,-0.19656c-0.32373,-0.23589 -0.78058,-0.16394 -1.01792,0.16163c-0.23694,0.32635 -0.16204,0.78249 0.16243,1.01905c0.29482,0.21363 0.68825,0.16241 0.9393,-0.08892l-6.88843,9.49601l-2.14152,7.77324l6.7238,-4.44915l15.31244,-21.10888l-4.58413,-3.32476l-1.47773,2.03732c-0.08454,-0.33891 -0.27329,-0.65711 -0.57922,-0.8811c-0.70978,-0.51465 -1.70209,-0.35896 -2.21642,0.35224c-2.94732,4.06583 -1.31345,5.14856 -4.04978,9.20988l0,0zm-3.37228,12.7096l-3.45867,2.28875l1.10135,-4.00192l2.35733,1.71317l0,0zm4.07426,-12.91652c2.12184,-3.13493 1.91974,-3.98497 3.73567,-6.76754c0.30039,0.20615 0.64525,0.27886 0.9838,0.26102l-4.71946,6.50653l0,0z"
                      fill="#666666" />
                    </g>
                  </svg>
                </div>
                <div class="tit">
                  AI 创作
                </div>
              </div>
              <ul>
                <li class="q-preinstall" @click="getProblem('写一首赞美祖国的诗')">
                  写一首赞美祖国的诗歌 →
                </li>
                <li class="q-preinstall" @click="getProblem('写一篇科幻小说')">
                  写一篇科幻小说 →
                </li>
                <li class="q-preinstall" @click="getProblem('写一篇周记')">
                  写一篇周记 →
                </li>
              </ul>
            </div>
            <div class="column">
              <div class="h-item">
                <div class="svg-image">
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path stroke="null" id="svg_6" d="m29.42623,14.31974l-3.45116,0.19049l-0.92333,4.64123l-3.05315,-1.12208l-4.4278,3.56137l-1.68579,-2.07839l-14.19891,8.88813l7.88923,-9.91216l-6.55304,-1.28863l2.05056,-1.91728l-4.49906,-3.51894l3.23328,-0.85101l-1.01666,-4.63201l3.38946,0.48546l2.78852,-4.27445l2.4695,1.66779l5.70837,-2.55978l0.7655,2.32062l6.81585,-0.0324l-1.18154,2.23666l5.75934,2.50526l-2.75345,1.44258l2.87429,4.24753z"
                      fill="#666666" />
                    </g>
                  </svg>
                </div>
                <div class="tit">
                  有趣的提问
                </div>
              </div>
              <ul>
                <li class="q-preinstall" @click="getProblem('有哪些有趣的实验')">
                  有哪些有趣的实验 →
                </li>
                <li class="q-preinstall" @click="getProblem('问一个AI答不出的问题')">
                  问一个AI答不出的问题 →
                </li>
                <li class="q-preinstall" @click="getProblem('AI会替代人类工作吗')">
                  AI会替代人类工作吗 →
                </li>
              </ul>
            </div>
            <div class="column">
              <div class="h-item">
                <div class="svg-image">
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <title>
                        Layer 1
                      </title>
                      <path stroke="null" id="svg_10" d="m3.55605,22.17576l22.87048,0.00873l-0.74215,1.09687l-21.37741,-0.02619l-0.75092,-1.07941l0,0zm0.15717,-14.59085l22.56487,-0.02619l0.65486,1.12522l-23.88333,0.00873l0.6636,-1.10776zm-2.22688,7.31128l27.00115,-0.02619l-0.0349,1.12522l-26.94878,-0.01746l-0.01746,-1.08156zm27.0235,0.10436c0,7.44923 -6.06115,13.50926 -13.51254,13.50926c-7.44817,0 -13.50819,-6.06112 -13.50819,-13.50926c0,-7.44817 6.06112,-13.5082 13.50819,-13.5082c7.45139,-0.00109 13.51254,6.06002 13.51254,13.5082zm-13.51148,-14.59085c-8.04272,0 -14.58757,6.54484 -14.58757,14.58976c0,8.04601 6.54484,14.59085 14.58757,14.59085c8.0471,0 14.59085,-6.54484 14.59085,-14.59085c0,-8.04491 -6.54375,-14.58976 -14.59085,-14.58976zm4.09368,14.59085c0,7.96012 -2.15663,13.50926 -4.09368,13.50926c-1.93486,0 -4.09146,-5.54913 -4.09146,-13.50926c0,-7.96232 2.15553,-13.5082 4.09146,-13.5082c1.93596,-0.00109 4.09368,5.54588 4.09368,13.5082zm-4.09368,-14.59085c-3.3599,0 -5.17302,7.5177 -5.17302,14.58976c0,7.07422 1.81312,14.59085 5.17302,14.59085c3.35993,0 5.17634,-7.51773 5.17634,-14.59085c-0.0011,-7.07206 -1.81641,-14.58976 -5.17634,-14.58976zm9.58738,14.59085c0,7.44923 -4.30237,13.50926 -9.58738,13.50926c-5.28391,0 -9.58409,-6.06112 -9.58409,-13.50926c0,-7.44817 4.30018,-13.5082 9.58409,-13.5082c5.28501,-0.00109 9.58738,6.06002 9.58738,13.5082zm-9.58738,-14.59085c-5.8796,0 -10.66566,6.54484 -10.66566,14.58976c0,8.04601 4.78606,14.59085 10.66566,14.59085c5.88179,0 10.66679,-6.54484 10.66679,-14.59085c0,-8.04491 -4.785,-14.58976 -10.66679,-14.58976z"
                      fill="#666666" />
                    </g>
                  </svg>
                </div>
                <div class="tit">
                  AI 百科
                </div>
              </div>
              <ul>
                <li class="q-preinstall" @click="getProblem('简单解释一下人工智能')">
                  简单解释一下人工智能 →
                </li>
                <li class="q-preinstall" @click="getProblem('番茄牛肉的做法')">
                  番茄牛肉的做法 →
                </li>
                <li class="q-preinstall" @click="getProblem('请介绍一下百度')">
                  请介绍一下百度 →
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-for="(message, index) in messages" :key="index" :class="getMessageClass(message.role)">
          {{message.content}}
        </div>
      </div>
      <div class="user-input-container">
        <div class="box-input">
          <div class="el-textarea">
            <textarea class="user_input_resizable-textarea" type="text" ref="textarea"
            placeholder="send a message" v-model="userInput" @keydown.enter="sendUserInput"
            style="min-height: 46px; height: 46px;" @input="adjustTextareaHeight">
            </textarea>
            <button :disabled="sendButtonDisabled" @click="sendUserInput " class="btn-send">
              <svg :style="{ fill: svgColors.svgElement5, stroke: svgColors.svgElement5 }"
              class="clickable-svg" ref="svgElement5" @click="handleSVGClick($event, 'svgElement5')"
              id="my-svg" width="25" height="25" xmlns="http://www.w3.org/2000/svg" stroke="null">
                <g stroke="null">
                  <title stroke="null">
                    Layer 1
                  </title>
                  <path fill="none" id="svg_20" d="m374,218c-1,-1 -4.05334,-4.96837 -7,-10c-4.07422,-6.95706 -6.83179,-11.52216 -10,-18c-1.38934,-2.84073 -3.98691,-5.75711 -5,-12c-0.48056,-2.96126 -2.14774,-5.94341 -4,-11c-1.08768,-2.96933 -2.44519,-8.03867 -3,-12c-1.00977,-7.20975 -2,-12 -2,-20c0,-8 0,-14 0,-19c0,-6 0,-11 0,-14c0,-4 -0.63834,-8.3054 2,-13c2.44962,-4.35883 8,-12 13,-17c6,-6 11.70425,-11.40069 17,-15c6.66794,-4.53193 13,-7 19,-10c6,-3 13.02756,-5.91912 19,-8c11.05304,-3.85103 17.45871,-4.66397 25,-8c3.29733,-1.45864 8.82376,-2.48626 11,-3c1.9465,-0.45951 3.0535,-0.45951 5,0c2.17624,0.51374 3.11215,1.9183 6,6c2.08246,2.94336 5.3851,7.37201 8,11c3.30762,4.58908 7.724,7.22273 11,11c4.63297,5.34187 9,9 12,13c3,4 4.71933,6.56511 7,10c2.76575,4.16542 5.41589,4.76108 7,8c1.38934,2.84072 2.33749,4.31001 4,7c1.487,2.40601 3.9176,2.38687 5,5c0.38269,0.92388 -0.05145,2.2987 1,4c1.1756,1.90211 2,2 2,4c0,1 1,2 1,4c0,1 0,2 0,3c0,2 0,3 0,4c0,2 1,2 1,3c0,1 0,2 0,3c0,2 -0.38269,3.07612 0,4c0.5412,1.30656 1,3 1,4c0,1 0,3 0,4c0,1 -1.41418,2.58578 0,4c0.70709,0.70711 1,1 1,2c0,1 0,4 0,6c0,1 0,4 0,5c0,2 -1,2 -1,3c0,1 -1.31073,4.08025 -2,7c-0.51373,2.17625 -2.29291,3.29289 -3,4c-1.41418,1.41422 -1,4 -2,6c-1,2 -2.61731,3.07613 -3,4c-1.0824,2.61313 -3.71411,3.21167 -6,6c-0.89661,1.09367 -3,3 -4,4c-1,1 -2.86829,2.28859 -7,4c-5.84314,2.4203 -6.54916,3.95517 -10,5c-0.95709,0.28978 -7,1 -10,3c-3,2 -4.87857,2.49345 -8,3c-0.98709,0.16019 -2.08582,-0.57957 -4,0c-3.45084,1.04483 -4.03873,1.51945 -7,2c-3.12143,0.50655 -7.83807,2.46552 -13,4c-4.88763,1.45294 -9.75711,3.98692 -16,5c-2.96127,0.48055 -5.54916,0.95517 -9,2c-0.95709,0.28978 -2,0 -3,0c-5,0 -9.17163,-0.15913 -13,1c-6.9017,2.08966 -12,4 -14,5l-2,1l-3,1l-3,0"
                  stroke="#000" />
                  <path id="svg_8" d="m20.07317,24.52439" opacity="NaN" fill="#fff" stroke="#00ff00"
                  />
                  <path transform="rotate(-30.1194 13.627 10.3878)" stroke-width="0.1" stroke="#020f0f"
                  id="svg_11" d="m14.84965,10.38779l-12.10751,-9.60632l21.7697,9.60632l-21.7697,9.60631l12.10751,-9.60631z"
                  fill="#10a37f" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <button class="gotofloor" @click="Skip2Latest">
        <svg stroke="#000000" fill="none" stroke-width="2" viewBox="0 0 24 24"
        stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 m-1" height="1em"
        width="1em" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="5" x2="12" y2="19">
          </line>
          <polyline points="19 12 12 19 5 12">
          </polyline>
        </svg>
      </button>
    </div>
    
    <div v-if="isProfileModalOpen === 1" class="modal-overlay us-user">
      <iframe class="modal-frame" src="./html/UserInfomation.html"></iframe>
    </div>
    <div v-if="isProfileModalOpen === 2" class="modal-overlay us-alterpasswrd">
      <iframe class="modal-frame" src="./html/alterpass.html"></iframe>
    </div>
    <div data-v-323e5e77="" class="float">
      <svg width="26" height="35.06" xmlns="http://www.w3.org/2000/svg">
        <g id="联系客服">
          <title>
            联系客服
          </title>
          <path stroke="#fff" id="svg_1" d="m20.58947,17.12444c-0.79815,-0.67446 -1.77464,-1.22051 -2.75412,-1.60249c-1.1429,0.39153 -2.5349,0.62995 -4.05244,0.62995c-1.52052,0 -2.91452,-0.23888 -4.05541,-0.62995c-0.97948,0.38198 -1.95696,0.92803 -2.75708,1.60249c-1.85734,1.56591 -2.0616,3.17213 -0.45738,3.5886c0.71844,0.18761 1.47171,0.04778 2.24993,-0.30298c-0.13651,0.35564 -0.21623,0.74111 -0.21623,1.1443c0,1.79128 1.48767,3.24228 3.32105,3.24228c1.10504,0 1.65207,-0.52834 1.91511,-1.33728c0.26207,0.80894 0.8091,1.33728 1.91013,1.33728c1.8364,0 3.32408,-1.45101 3.32408,-3.24228c0,-0.40319 -0.07975,-0.78866 -0.21922,-1.1443c0.78019,0.35075 1.53247,0.49059 2.2529,0.30298c1.60323,-0.41647 1.39596,-2.0227 -0.46133,-3.5886l0,0zm-6.80852,-1.58362c3.08489,0 5.58689,-1.17041 5.58689,-2.61419s-2.50201,-2.61419 -5.58689,-2.61419c-3.08594,0 -5.58992,1.17064 -5.58992,2.61419s2.50398,2.61419 5.58992,2.61419z"
          fill="#666666" />
          <path stroke="#ffffff" id="svg_2" d="m16.94171,17.15063c1.16651,-2.72629 5.73694,0 0,3.50523c-5.73694,-3.50523 -1.16651,-6.23152 0,-3.50523z"
          fill="#666666" />
        </g>
      </svg>
      <span data-v-323e5e77="">
        联系客服
      </span>
    </div>
  </div>
</template>
<script src="./js/homePage.js">
</script>
<style src="./css/homePage.css">
</style>