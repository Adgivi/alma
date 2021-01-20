<template>
  <transition name="fade">
    <div v-if="show" class="overlay" @click="onClickOverlay">
      <Close v-on="$listeners" />
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Close from "@/components/Close";

export default {
  components: { Close },
  props: ["show"],
  methods: {
    onClickOverlay(e) {
      e.stopPropagation();
      this.$emit("click-overlay");
    }
  },
  watch: {
    show: function() {
      document.documentElement.style.overflow = this.show ? "hidden" : "auto";
    }
  }
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  z-index: $z-index-overlay;
}
</style>
