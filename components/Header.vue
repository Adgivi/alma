<template>
  <header class="header">
    <div class="header__container">
      <div class="logo">
        <span class="logo__txt">Un cul ciclista</span>
        <span class="logo__icon">🍑</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100vw;
  height: $layout-header-height;
  border-bottom: 2px solid #ed1e79; // TODO: move to settings.colors
  background-color: rgba(255, 255, 255, 0.95);
  z-index: $z-index-header;

  &__container {
    @extend .container;
    height: 100%;
  }
}

.logo {
  $logo-scale: 0.85;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
  &__txt {
    font-family: liebeerika, sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 86px * $logo-scale;
    line-height: 86px * $logo-scale;
    height: 70px * $logo-scale;
    color: $f-color__neutral-grey--dark;
    display: block;
  }
  &__icon {
    display: block;
    font-size: 60px * $logo-scale;
    line-height: 77px * $logo-scale;
    height: 60px * $logo-scale;
    margin-left: 14px * $logo-scale;
  }
}
</style>
