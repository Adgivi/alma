<template>
  <article class="post">
    <div
      class="post__hero"
      :style="{ backgroundImage: `url(${hero.src})` }"
    ></div>
    <div class="post__description container">
      <h2 class="post__title">
        <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
      </h2>
      <span class="post__info">{{ date }}</span>
      <p>
        {{ post.fields.description }}
      </p>
    </div>
  </article>
</template>
<script>
import moment from "moment";

export default {
  props: {
    post: Object
  },
  computed: {
    hero() {
      const img = this.post.fields.heroImage.fields;
      return {
        src: img.file.url,
        title: img.title
      };
    },
    date() {
      return moment(this.post.fields.publishDate).format("D [de] MMMM YYYY");
    }
  }
};
</script>

<style lang="scss">
.post {
  position: relative;
  height: 500px;
  margin-bottom: 8px;
  &__hero {
    z-index: $z-index-post-hero;
    height: 500px;
    background-size: cover;
    background-position: center;
  }
  &__description {
    z-index: $z-index-post-description;
    height: 225px;
    background-color: $f-color__neutral-white;
    position: absolute;
    bottom: -30px;
    transform: translateX(-50%);
    left: 50%;
    padding: 12px 60px 15px;
  }
  &__title {
    font-family: $f-font-family__secondary-condensed;
    font-weight: 500;
    font-style: normal;
    margin-bottom: $inuit-global-spacing-unit-small;
  }
  &__info {
    display: block;
    color: $f-color__neutral-grey;
    font-style: italic;
    font-size: $f-font-size--s;
    margin-bottom: $inuit-global-spacing-unit-small;
  }
}
</style>
