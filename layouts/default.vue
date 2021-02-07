<template>
  <main>
    <Header />
    <div class="content">
      <nuxt />
      <Loader v-if="isFetching" />
    </div>
    <Footer />
  </main>
</template>

<script>
import es from "dayjs/locale/es";
import ca from "dayjs/locale/ca";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
// TODO deploy: pick the right one
import ogImage from "@/assets/avatar-m.jpg";
import { BASE_URL_PROD, SOCIAL_NETWORKS_SHARING } from "@/shared/constants";

const langs = { es, ca };

export default {
  components: { Header, Footer, Loader },
  mounted() {
    SOCIAL_NETWORKS_SHARING.forEach(({ name, color }) =>
      document.documentElement.style.setProperty(`--${name}`, color)
    );
  },
  beforeCreate() {
    this.$dayjs.locale(langs[this.$i18n.locale]);
  },
  computed: {
    isFetching() {
      return this.$store.state.isFetching;
    }
  },
  head() {
    return {
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          // TODO deploy: change
          content: BASE_URL_PROD + ogImage
        }
      ]
    };
  }
};
</script>
<style lang="scss">
main {
  padding-top: $layout-header-height;
  .content {
    position: relative;
    min-height: $layout-content-min-height;
    @media screen and (max-width: $f-breakpoint--mobile-portrait) {
      min-height: calc(
        100vh - #{$layout-header-height-mb} - #{$layout-footer-height-mb}
      );
    }
  }
  @media screen and (max-width: $f-breakpoint--mobile-portrait) {
    padding-top: $layout-header-height-mb;
  }
}
</style>
