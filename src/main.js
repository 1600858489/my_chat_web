// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// // import '@/assets/img/icons'
// // import Vue from 'vue';
// import SvgIcon from './components/Icon.vue';
//
// Vue.component('SvgIcon', SvgIcon);
//
//
// createApp(App).use(router).mount('#app')


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import SvgIcon from './components/Icon.vue';

const app = createApp(App);

// 全局注册SvgIcon组件
app.component('SvgIcon', SvgIcon);

app.use(router).mount('#app');
