<template>
  <main>
    <Header />
    <nuxt />
  </main>
</template>

<script>
import es from "dayjs/locale/es";
import ca from "dayjs/locale/ca";

const langs = { es, ca };

import Header from "@/components/Header";
// TODO deploy: pick the right one
import ogImage from "@/assets/avatar.jpg";

export default {
  components: { Header },
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
