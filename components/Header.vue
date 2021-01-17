<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link :to="localePath('index')">
        <div class="logo">
          <span class="logo__txt">Un Cul Ciclista</span>
          <span class="logo__icon">🍑</span>
        </div>
      </nuxt-link>
      <!--      <nuxt-link-->
      <!--        v-for="locale in availableLocales"-->
      <!--        :key="locale.code"-->
      <!--        :to="switchLocalePath(locale.code)"-->
      <!--        class="header__language"-->
      <!--      >-->
      <!--        {{ locale.name }}-->
      <!--      </nuxt-link>-->
    </div>
  </header>
</template>

<script>
export default {
  // computed: {
  //   availableLocales() {
  //     return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
  //   }
  // }
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
    @include container;
    height: 100%;
  }
}

.logo {
  $logo-scale: 0.85;
  $logo-scale-mb: 0.7;

  @media screen and (max-width: $f-breakpoint--mobile-portrait) {
    font-size: $f-font-size--xs;
  }
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
  &__txt {
    font-family: liebeerika, sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 86px * $logo-scale;
    line-height: 86px * $logo-scale;
    height: 70px * $logo-scale;
    color: $f-color__neutral-grey--dark;
    display: block;
    @media screen and (max-width: $f-breakpoint--mobile-portrait) {
      font-size: 86px * $logo-scale-mb;
      line-height: 86px * $logo-scale-mb;
      height: 70px * $logo-scale-mb;
    }
  }
  &__icon {
    display: block;
    font-size: 60px * $logo-scale;
    line-height: 77px * $logo-scale;
    height: 60px * $logo-scale;
    margin-left: 14px * $logo-scale;
    @media screen and (max-width: $f-breakpoint--mobile-portrait) {
      font-size: 60px * $logo-scale-mb;
      line-height: 77px * $logo-scale-mb;
      height: 60px * $logo-scale-mb;
      margin-left: 14px * $logo-scale-mb;
    }
  }
}
</style>
