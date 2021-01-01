<template>
  <header class="header">
    <div class="container">
      <Logo class="header__logo" />
    </div>
  </header>
</template>

<script>
import Logo from "@/assets/un-cul-ciclista.svg";

export default { components: { Logo } };
</script>

<style lang="scss">
.header {
  height: $layout-header-height;
  background-image: url("../assets/gradient-lighter.png");
  background-size: cover;
  position: relative;

  &__logo {
    height: $layout-header-height + 10px;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
  }
}
</style>
