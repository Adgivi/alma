<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link :to="localePath('index')" class="header__logo-link">
        <Logo class="header__logo" />
      </nuxt-link>
    </div>
  </header>
</template>

<script>
import Logo from "@/assets/logo69.svg";

export default {
  components: { Logo }
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100vw;
  height: $layout-header-height;
  //border-bottom: 2px solid $f-color__neutral-grey--semi-dark; // TODO: move to settings.colors
  background-color: rgba(255, 255, 255, 0.95);
  z-index: $z-index-header;

  @media screen and (max-width: $f-breakpoint--mobile-portrait) {
    height: $layout-header-height-mb;
  }

  &__container {
    @include container($narrow-desktop: true);
    height: 100%;
  }

  &__logo-link {
    display: inline-flex;
    align-items: center;
    height: 100%;
  }
}
</style>
