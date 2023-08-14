<template>
  <div class="container demo-1">
    <div class="content">
      <div id="large-header" class="large-header">
        <canvas id="demo-canvas"></canvas>
        <div class="logo_box">
          <h3>WELCOME!</h3>
          <form action="#" name="f" method="post" @submit.prevent="login">
            <div class="input_outer">
              <span class="u_user"></span>
              <input name="logname" class="text" style="color: #FFFFFF !important" type="text" v-model="identifier" placeholder="请输入用户名或手机号">
            </div>
            <div class="input_outer">
              <span class="us_uer"></span>
              <input name="logpass" class="text" style="color: #FFFFFF !important;" type="password" v-model="password" placeholder="请输入密码">
            </div>
            <div class="mb2">
              <button  class="act-but submit" type="submit">登录</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div><!-- /container -->

</template>

<script src="./js/loginPage.js"></script> 

<style scoped>
  @import url("../../public/css/demo.css");
  @import url("../../public/css/component.css");
  @import url("../../public/css/normalize.css");
</style>
