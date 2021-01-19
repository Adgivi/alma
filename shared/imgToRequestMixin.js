const IMG_AUGMENT_FACTOR = 2;
const IMG_MAX_WIDTH = 2000;

export default {
  mounted() {
    // window.addEventListener("resize", this.handleResize);
    this.imgWidthToRequest = Math.min(
      window.innerWidth * IMG_AUGMENT_FACTOR,
      IMG_MAX_WIDTH
    );
  },
  data() {
    return { imgWidthToRequest: "" };
  }
  // methods: {
  //   handleResize() {
  //     console.warn("W: ", window.innerWidth);
  //   }
  // }
};
