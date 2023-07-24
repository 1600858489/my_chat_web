<template>
  <div class="register-container">
    <h1>注册</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="username">用户名:</label>
        <div class="username" v-if="1">{{"test"}}</div>
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

<script src="./js/registerPage.js"></script>

<style src="./css/registerPage.css"></style>