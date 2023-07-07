<template>
  <div class="login-container">
    <h1>登录</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="identifier">用户名或手机号:</label>
        <input type="text" id="identifier" v-model="identifier" placeholder="输入用户名或手机号" />
      </div>
      <div class="form-group">
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" placeholder="输入密码" />
      </div>
      <button type="submit">登录</button>
    </form>
    <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
    <div class="register-link">
      还没有账号？<router-link to="/register">点击注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      identifier: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    login() {
      // 发送登录请求
      const loginData = {
        identifier: this.identifier,
        password: this.password,
      };

      fetch('http://128.14.76.82:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === '登录成功') {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('username', data.user_name);
            localStorage.getItem('userId',data.user_id);
            // 登录成功，跳转至首页
            this.$router.push('/');
          } else {
            // 登录失败，显示错误消息
            this.errorMessage = data.message;
          }
        })
        .catch((error) => {
          console.error('登录请求出错:', error);
          this.errorMessage = '无效的请求';
        });
    },
  },
};
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #3490dc;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-message {
  color: red;
  margin-top: 10px;
}

.register-link {
  margin-top: 10px;
}
</style>
