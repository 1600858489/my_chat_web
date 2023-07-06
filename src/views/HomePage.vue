<template>
  <div>
    <!-- 导航栏 -->
    <nav>
      <div class="nav-logo">Logo</div>

      <div class="nav-user" @click="goToLogin">
        <div class="user-avatar" :class="{ 'grayed-out': !user.loggedIn }">
          <img :src="user.avatar" alt="User Avatar" />
        </div>
        <span>{{ user.loggedIn ? user.username : '未登录' }}</span>
        <button v-if="user.loggedIn" @click="logout" class="logout">退出登录</button>
      </div>
    </nav>

    <!-- 首页主体留白 -->
    <div class="main-content">
      <!-- 主体内容 -->
      <button @click="goToChat" class="goToChat">前往聊天界面</button>
<!--      <p v-else>请登录以使用聊天功能</p>-->
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {

  name: 'HomePage',
  data() {
    return {
      user: {
        loggedIn: false, // 是否已登录
        username: '', // 用户名
        avatar: require('@/assets/logo.png'), // 头像路径
      },
      // showLogoutButton: false,
    };
  },
  created() {
    // 在组件创建时从本地存储中获取用户信息
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      // 从本地存储中获取用户信息
      const loggedIn = localStorage.getItem('loggedIn') === 'true';
      const username = localStorage.getItem('username');
      // 更新用户信息
      this.user.loggedIn = loggedIn;
      this.user.username = loggedIn ? username : '';
    },
    goToLogin() {
      // 跳转至登录页面
      this.$router.push('/login');
    },
    goToChat() {
      if (this.user.loggedIn) {
        // 跳转至聊天页面
        this.$router.push('/chat');
      } else {
        // 未登录，显示登录提示窗
        alert('请登录以使用聊天功能');
      }
    },
    updateUser(user) {
      this.user.loggedIn = user.loggedIn;
      this.user.username = user.username;
      this.user.avatar = user.avatar;
    },


    logout() {
      // 获取用户ID和令牌
      const userId = localStorage.getItem('userId');
      const token = Cookies.get('token');

      const logoutData = {
        user_id:userId
      }

      // 发送退出登录请求
      fetch('http://128.14.76.82:8000/api/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':token,


        },
        body: JSON.stringify(logoutData),
      })
        .then(response => {
          // 清除本地存储和cookie中的用户信息
          localStorage.removeItem('loggedIn');
          localStorage.removeItem('username');
          Cookies.remove('token');


          // 更新用户信息
          this.user.loggedIn = false;
          this.user.username = '';
          this.user.avatar = require('@/assets/logo.png');

          // 提示退出登录成功
          alert(response.data.message);
        })
        .catch(error => {
          console.error(error);
          // 处理错误
        });
    },

  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
}

.nav-logo {
  font-weight: bold;
}

.nav-user {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-avatar img {
  width: 50%;
  height: auto;
}

.grayed-out {
  filter: grayscale(100%);
}

.main-content {
  padding: 20px;
}

.logout{
  width: 10px;

}
</style>
