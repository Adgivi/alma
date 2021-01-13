<template>
  <section>
    <Entry v-for="post in posts" :post="post" :key="post.fields.slug" />
  </section>
</template>

<script>
import Header from "@/components/Header";
import Greetings from "@/components/Greetings";
import Entry from "@/components/Entry";

export default {
  components: { Header, Greetings, Entry },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
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
