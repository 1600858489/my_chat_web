export default {
  data() {
    return {
      // ...其他data...
      showScrollButton: true, // 控制滚动按钮的显示与隐藏
    };
  },
  methods: {
    // ...其他methods...
    scrollToBottom() {
      const chatLogContainer = this.$refs.chatLogContainer;
      chatLogContainer.scrollTop = chatLogContainer.scrollHeight;
    },
    handleScroll() {
      const chatLogContainer = this.$refs.chatLogContainer;
      const isAtBottom = chatLogContainer.scrollHeight - chatLogContainer.scrollTop === chatLogContainer.clientHeight;
      this.showScrollButton = !isAtBottom;
    },
  },
  created() {
    // 添加滚动事件监听
    const chatLogContainer = this.$refs.chatLogContainer;
    chatLogContainer.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // 移除滚动事件监听
    const chatLogContainer = this.$refs.chatLogContainer;
    chatLogContainer.removeEventListener('scroll', this.handleScroll);
  },
};
