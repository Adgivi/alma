<template>
  <main>
    <Header />
    <Greetings />
    <section class="container" v-for="post in posts" :key="post.fields.slug">
      <div
        class="image"
        :style="
          `background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`
        "
      ></div>
      <h2 class="title">
        <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
      </h2>
      <p class="description">
        {{ post.fields.description }}
        <br />
        <nuxt-link :to="post.fields.slug" class="more">Read more ⟶</nuxt-link>
      </p>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";
import Greetings from "@/components/Greetings";

export default {
  components: { Header, Greetings },
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
.container {
  max-width: $global-container-width;
  margin: auto;
}
</style>
