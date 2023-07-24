<template>
  <div class="register-container">
    <h1>注册</h1>
    <div class="user-info">
      <form @submit.prevent="register">
        <div class="form-group">
<!--          <label for="username">用户名:</label>-->
          <div class="input-hint-username" v-if="showUserHint">{{"请输入用户名"}}</div>
          <input type="text" id="username" v-model="username" placeholder="  输入用户名" @focus="showUserHint = true" @blur="showUserHint = false"/>
        </div>
        <div class="form-group">
<!--          <label for="phone">手机号:</label>-->
          <div class="input-hint-username" v-if="showPhoneHint">{{"请输入手机号"}}</div>
          <input type="text" id="phone" v-model="phone" placeholder="  输入手机号" @focus="showPhoneHint = true" @blur="showPhoneHint = false" />
        </div>
        <div class="form-group">
<!--          <label for="password">密码:</label>-->
          <div class="input-hint-username" v-if="showPassHint">{{"请输入密码"}}</div>
          <input type="password" id="password" v-model="password" placeholder="  输入密码" @focus="showPassHint = true" @blur="showPassHint = false"/>
        </div>
        <div class="form-group">
<!--          <label for="confirmPassword">确认密码:</label>-->
          <div class="input-hint-username" v-if="showconfPassHint">{{"确认密码"}}</div>
          <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="  确认密码"  @focus="showconfPassHint = true" @blur="showconfPassHint = false"/>
        </div>
        <button type="submit">注册</button>
      </form>
    </div>

    <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
    <div class="login-link">
      已有账户？<router-link to="/login">返回登录</router-link>
    </div>
  </div>
</template>

<script src="./js/registerPage.js"></script>

<style src="./css/registerPage.css"></style>