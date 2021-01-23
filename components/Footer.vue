<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__social social">
        <a
          target="_blank"
          :href="`mailto:${EMAIL}`"
          class="social__item social__item--email anchor-dark"
        >
          {{ EMAIL }}
        </a>
        <a
          v-for="network in networks"
          target="_blank"
          :href="network.url"
          :class="socialItemClass(network)"
        >
          <span v-if="network.label">{{ network.label }}</span>
          <font-awesome-icon
            v-else
            font-awesome-icon
            :icon="['fab', network.name]"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { EMAIL, SOCIAL_NETWORKS } from "@/shared/constants";

export default {
  data() {
    return {
      EMAIL,
      networks: SOCIAL_NETWORKS(this.$i18n.locale)
    };
  },
  methods: {
    socialItemClass: network => `social__item social__item--${network.name}
          anchor-dark${!network.label ? " social__item--icon" : ""}`
  }
};
</script>

<style lang="scss">
.footer {
  font-family: $f-font-family__secondary;
  font-size: $f-font-size--xs;
  background-color: $f-color__neutral-grey--ultra-dark;
  color: $f-color__neutral-white;
  &__container {
    @include container();
    display: flex;
    align-items: center;
    height: $layout-footer-height;
  }
}
.social {
  display: flex;
  align-items: center;
  $spacing: $inuit-global-spacing-unit-tiny;
  &__item {
    display: block;
    padding-right: $spacing;
    & + & {
      padding-left: $spacing;
    }
    &--icon {
      font-size: $f-font-size--m;
    }
  }
}
</style>
