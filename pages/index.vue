<template>
  <main>
    <Header />
    <!--    <Greetings />-->
    <Post v-for="post in posts" :post="post" :key="post.fields.slug" />
  </main>
</template>

<script>
import Header from "@/components/Header";
import Greetings from "@/components/Greetings";
import Post from "@/components/Post";

export default {
  components: { Header, Greetings, Post },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  head: {
    title: "Paw Waves, Latest Posts"
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
