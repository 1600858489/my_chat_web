export default {
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      phone: '',
      password: '',
      confirmPassword: '',
      errorMessage: '',
      showUserHint: false,
      showPhoneHint: false,
      showPassHint: false,
      showconfPassHint: false,
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
      if (!this.username || !this.password || !this.confirmPassword) {
        this.errorMessage = '请填写所有必填字段';
        return false;
      }

      if (this.username.length < 2 || this.username.length > 8) {
        this.errorMessage = '用户名长度应为2-8位';
        return false;
      }

      // 如果用户输入了手机号，则验证其格式
      if (this.phone && !/^1\d{10}$/.test(this.phone)) {
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
