<template>
  <div class="login-container">
    <img src="../assets/logo.png" alt="logo" class="logo-image">
    <div class="user-info">
      <form @submit.prevent="login">
        <div class="form-group">
          <div class="input-hint" v-if="showUserHint">{{"请输入用户名或手机号"}}</div>
          <input type="text" id="identifier" v-model="identifier" placeholder="  请输入用户名或手机号" @focus="showUserHint = true" @blur="showUserHint = false"/>
        </div>
        <div class="form-group">
          <div class="input-hint" v-if="showPassHint">{{"请输入密码"}}</div>
          <input type="password" id="password" v-model="password" placeholder="  请输入密码" @focus="showPassHint = true" @blur="showPassHint = false" />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>

    <div class="error-message" v-if="errorMessage"> {{ errorMessage }}</div>
    <div class="register-link">
      还没有账号？<router-link to="/register">点击注册</router-link>
    </div>
  </div>
</template>

<script src="./js/loginPage.js"></script>

<style src="./css/loginPage.css"></style>