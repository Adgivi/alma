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
      <div class="footer__lang">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="footer__lang-option anchor-dark"
        >
          {{ locale.label }}
        </nuxt-link>
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
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    }
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
    @include container($narrow-desktop: true);
    font-family: $f-font-family__secondary;
    font-size: $f-font-size--xs;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $layout-footer-height;
    @media screen and (max-width: $f-breakpoint--mobile-portrait) {
      height: $layout-footer-height-mb;
      overflow-y: hidden;
      flex-direction: column;
      justify-content: space-between;
      padding-top: $inuit-global-spacing-unit-small;
      padding-bottom: $inuit-global-spacing-unit;
      text-align: center;
    }
  }
}
.social {
  display: flex;
  align-items: center;
  @media screen and (max-width: $f-breakpoint--mobile-portrait) {
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
  }
  $spacing: $inuit-global-spacing-unit-tiny;
  $spacing-mb: $inuit-global-spacing-unit-small;
  &__item {
    display: block;
    padding-right: $spacing;
    & + & {
      padding-left: $spacing;
    }
    &--icon {
      font-size: $f-font-size--m;
      @media screen and (max-width: $f-breakpoint--mobile-portrait) {
        font-size: $f-font-size--l;
      }
    }
    &--email {
      @media screen and (max-width: $f-breakpoint--mobile-portrait) {
        flex: 100%;
      }
    }
  }
}
</style>
