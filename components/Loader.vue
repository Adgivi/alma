<template>
  <div class="loader loader__container">
    <div class="loader__core">
      <div>🍑</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@keyframes loader__core {
  0% {
    transform: scale(0.85);
  }
  5% {
    transform: scale(1);
  }
  39% {
    transform: scale(0.75);
  }
  45% {
    transform: scale(0.9);
  }
  60% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(0.8);
  }
}
.loader__container {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-size: 150px;
}
.loader__core > div {
  animation: loader__core 1.5s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>
