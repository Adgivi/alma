<template>
  <main>
    <Header />
    <nuxt />
  </main>
</template>

<script>
import moment from "moment";

import Header from "@/components/Header";
// TODO deploy: pick the right one
import ogImage from "@/assets/avatar.jpg";

moment.locale("ca");

export default {
  components: { Header },
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
