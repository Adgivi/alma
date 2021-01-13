<template>
  <section class="post">
    <div
      class="image"
      :style="
        `background: url(https:${post.fields.heroImage.fields.file.url}) center center no-repeat`
      "
    ></div>
    <h1>{{ post.fields.title }}</h1>
    <span>{{ date }}</span>
    <article class="container" v-html="$md.render(post.fields.body)"></article>
    <div class="container" v-html="post.fields.iframe"></div>
  </section>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  computed: {
    post() {
      return this.$store.getters.getPostBySlug(this.slug);
    },
    date() {
      // TODO: duplicated
      return moment(this.post.fields.publishDate).format("D [de] MMMM YYYY");
    }
  },
  head() {
    return {
      title: this.post.fields.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.fields.description
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.post.fields.description
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.post.fields.title
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.post.fields.heroImage.fields.file.url
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.back {
  margin-top: 20px;
}

.image {
  width: 100%;
  height: 300px;
  margin: 30px 0;
  background-size: 100% auto !important;
}
</style>
