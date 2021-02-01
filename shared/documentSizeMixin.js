export default {
  methods: {
    getPageHeight() {
      const body = document.body;
      const html = document.documentElement;
      return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
    },
    getScrollPercentage() {
      const offset = window.pageYOffset + window.innerHeight;
      const height = this.getPageHeight();

      return Math.floor((100 * offset) / height);
    }
  }
};
