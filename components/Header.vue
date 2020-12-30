<template>
  <header class="header"><Logo class="header__logo" /></header>
</template>

<script>
import Logo from "@/assets/CulCiclista.svg";

export default { components: { Logo } };
</script>

<style lang="scss">
.header {
  height: $layout-header-height;
  background-color: $f-color__neutral-white;
  padding: $inuit-global-spacing-unit-small;
  border-style: solid;
  border-image-source: linear-gradient(
    to left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.08),
    rgba(0, 0, 0, 0)
  );
  border-image-width: 0 0 2px;
  border-image-slice: 1;

  &__logo {
    max-height: 100%;
  }
}
</style>
