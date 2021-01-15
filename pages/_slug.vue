<template>
  <section class="post">
    <div
      class="post__hero"
      :style="{
        backgroundImage: `url(${post.fields.heroImage.fields.file.url})`
      }"
    ></div>
    <article class="post__body-wrapper container">
      <h1 class="post__title">{{ post.fields.title }}</h1>
      <span class="h-subtitle">{{ date }}</span>
      <div class="post__body" v-html="$md.render(post.fields.bodyIntro)"></div>
      <div class="post__track"><span v-html="post.fields.iframe"></span></div>
      <div class="post__body" v-html="$md.render(post.fields.body)"></div>
    </article>
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

<style lang="scss">
.post {
  overflow-x: hidden;
  padding-bottom: $inuit-global-spacing-unit-large;
  &__hero {
    height: 400px;
    background-position: center;
    background-size: cover;
  }
  &__title {
    text-align: center;
    padding: $inuit-global-spacing-unit $inuit-global-spacing-unit-large;
    @media screen and (max-width: $f-breakpoint--tablet-portrait) {
      padding: $inuit-global-spacing-unit 0;
    }
  }
  &__body {
    img {
      position: relative;
      transform: translateX(-50%);
      left: 50%;
      max-width: 100vw;
      width: auto;
      max-height: 700px;
    }
  }
  &__track {
    display: flex;
    justify-content: center;
    margin: $inuit-global-spacing-unit-large 0;
    @media screen and (max-width: $f-breakpoint--tablet-portrait) {
      margin: $inuit-global-spacing-unit 0;
    }
    iframe {
      max-width: 100vw;
    }
  }
}
</style>
