<template>
  <div class="register-container">
    <h1>注册</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="username" placeholder="输入用户名" />
      </div>
      <div class="form-group">
        <label for="phone">手机号:</label>
        <input type="text" id="phone" v-model="phone" placeholder="输入手机号" />
      </div>
      <div class="form-group">
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" placeholder="输入密码" />
      </div>
      <div class="form-group">
        <label for="confirmPassword">确认密码:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="确认密码" />
      </div>
      <button type="submit">注册</button>
    </form>
    <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
    <div class="login-link">
      已有账户？<router-link to="/login">返回登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      phone: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
    };
  },
  methods: {
    register() {
      // 表单验证
      if (!this.validateForm()) {
        return;
      }

      // 发送注册请求
      const registerData = {
        username: this.username,
        phone: this.phone,
        password: this.password,
      };

      fetch('http://128.14.76.82:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === '注册成功') {
            // 注册成功，跳转至登录页面
            this.$router.push('/login');
          } else {
            // 注册失败，显示错误消息
            this.errorMessage = data.message;
          }
        })
        .catch((error) => {
          console.error('注册请求出错:', error);
          this.errorMessage = '无效的请求';
        });
    },
    validateForm() {
      // 简单的表单验证逻辑
      if (!this.username || !this.phone || !this.password || !this.confirmPassword) {
        this.errorMessage = '请填写所有字段';
        return false;
      }

      if (this.username.length < 2 || this.username.length > 8) {
        this.errorMessage = '用户名长度应为2-8位';
        return false;
      }

      if (!/^1\d{10}$/.test(this.phone)) {
        this.errorMessage = '请输入有效的手机号';
        return false;
      }

      if (this.password.length < 6 || this.password.length > 8) {
        this.errorMessage = '密码长度应为6-8位';
        return false;
      }

      if (this.password !== this.confirmPassword) {
        this.errorMessage = '密码与确认密码不一致';
        return false;
      }

      return true;
    },
  },
};
</script>

<style>
.register-container {
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

.login-link {
  margin-top: 10px;
}
</style>
