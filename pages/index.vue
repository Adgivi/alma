<template>
  <section class="index-page" v-show="!isFetching">
    <Entry v-for="post in posts" :post="post" :key="post.fields.slug" />
  </section>
</template>

<script>
import Header from "@/components/Header";
import Greetings from "@/components/Greetings";
import Entry from "@/components/Entry";
import Loader from "@/components/Loader";

export default {
  components: { Header, Greetings, Entry, Loader },
  computed: {
    isFetching() {
      return this.$store.state.isFetching;
    },
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>
<style lang="scss">
.index-page {
  background-color: $f-color__neutral-grey--ultra-dark;
  padding-bottom: $layout-entry-bottom-offset;
  min-height: $layout-content-min-height;
  @media screen and (max-width: $global-container-width) {
    padding-bottom: 0;
  }
}
</style>
