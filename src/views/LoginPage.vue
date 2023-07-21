<template>
  <div class="login-container">
<!--    <h1>登录</h1>-->
    <img src="../assets/logo.png" alt="logo" class="logo-image">
<!--    <span>test<br>test</span>-->
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
    <button class="register">注册</button>
    <div class="register-link">
      还没有账号？<router-link to="/register">点击注册</router-link>
    </div>
  </div>
</template>

<script src="./js/loginPage.js"></script>

<style src="./css/loginPage.css"></style>