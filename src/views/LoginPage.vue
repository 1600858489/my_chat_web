<template>
  <div class="container demo-1">
    <div class="content">
      <div id="large-header" class="large-header">
        <canvas id="demo-canvas"></canvas>
        <div class="logo_box">
          <h3>欢迎你</h3>
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
              <!-- <a class="act-but submit" href="javascript:;" style="color: #FFFFFF">登录</a> -->
              <button  class="act-but submit" type="submit">登录</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div><!-- /container -->

</template>


<script src="./js/loginPage.js">
// main.js
    for(var i = 0; i < points.length; i++) {
        var closest = [];
        var p1 = points[i];
        for(var j = 0; j < points.length; j++) {
            var p2 = points[j]
            if(!(p1 == p2)) {
                var placed = false;
                for(var k = 0; k < 5; k++) {
                    if(!placed) {
                        if(closest[k] == undefined) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }

                for(var l = 0; l < 5; l++) {  // 注意这里，我们将 k 更改为 l
                    if(!placed) {
                        if(getDistance(p1, p2) < getDistance(p1, closest[l])) {  // 这里也要更改
                            closest[l] = p2;  // 这里也要更改
                            placed = true;
                        }
                    }
                }
            }
        }
        p1.closest = closest;
    }

</script> 


<style scoped>
  @import url("../../public/css/demo.css");
  @import url("../../public/css/component.css");
  @import url("../../public/css/normalize.css");
</style>
