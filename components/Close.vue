<template><div class="close" v-on:click="onClick"/></template>

<script>
export default {
  methods: {
    onClick(e) {
      e.stopPropagation();
      this.$emit("click-close");
    }
  }
};
</script>

<style lang="scss">
.close {
  $size: 50px;
  $barSize: 6px;
  z-index: $z-index-close;
  position: fixed;
  top: 6px;
  right: 6px;
  width: $size;
  height: $size;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid white;

  &,
  &:before,
  &:after {
    transition-property: border-color, background-color;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
  }

  &:before,
  &:after {
    position: absolute;
    background-color: white;
    height: $barSize;
    border-radius: $barSize / 2;
    content: " ";
    width: 40px;
    top: 50%;
    left: 50%;
  }

  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover {
    cursor: pointer;
    border-color: $f-color__accent;

    &:after,
    &:before {
      background-color: $f-color__accent;
    }
  }
}
</style>
