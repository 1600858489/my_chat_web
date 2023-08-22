export default {
  name: 'LoginPage',
  data() {
    return {
      showPassHint: false,
      showUserHint: false,
      identifier: '',
      password: '',
      errorMessage: '',
      
      width: null,
      height: null,
      largeHeader: null,
      canvas: null,
      ctx: null,
      points: [],
      target: null,
      animateHeader: true,
    };
  },
  // mounted() {
  //   // this.initHeader();
  //   // this.initAnimation();
  //   // this.addListeners();
  // },
  
  methods: {
    login() {
      // 发送登录请求
      const loginData = {
        identifier: this.identifier,
        password: this.password,
      };

      fetch('http://198.44.238.68:8000/api/login/', {
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
          this.errorMessage = '登录失败，请检查用户名和密码是否正确。';
        });
      },
    },
  
};