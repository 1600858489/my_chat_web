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
        .then((response) => {
          if (response.ok) {
            // const cookies = response.headers.get("Set-Cookie")
            // console.log(cookies)
            // console.log(cookies)


            // localStorage.setItem('token', cookieValue);

            return response.json();
          } else {
            throw new Error('登录请求失败');
          }
        })
        .then((data) => {
          if (data.message === '登录成功') {
            // console.log(data)
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('username', data.user_name);
            localStorage.setItem('userId', data.user_id);
            // console.log(data.token)
            localStorage.setItem('token', data.token);


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
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button[type="submit"] {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

.error-message {
  color: #f00;
  margin-bottom: 10px;
}

.register-link {
  margin-top: 20px;
  color: #007bff;
}

.register-link a {
  color: #007bff;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>