<template>
  <main>
    <Header />
    <nuxt />
    <Footer />
  </main>
</template>

<script>
import es from "dayjs/locale/es";
import ca from "dayjs/locale/ca";

const langs = { es, ca };

import Header from "@/components/Header";
import Footer from "@/components/Footer";
// TODO deploy: pick the right one
import ogImage from "@/assets/avatar.jpg";

export default {
  components: { Header, Footer },
  beforeCreate() {
    this.$dayjs.locale(langs[this.$i18n.locale]);
  },
  head() {
    return {
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          // TODO deploy: change
          content: "https://lavidaenbicicleta.netlify.app" + ogImage
        }
      ]
    };
  }
};
</script>
<style lang="scss">
main {
  padding-top: $layout-header-height;
  @media screen and (max-width: $f-breakpoint--mobile-portrait) {
    padding-top: $layout-header-height-mb;
  }
}
</style>
