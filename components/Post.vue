<template>
  <article class="post">
    <div
      class="post__hero"
      :style="{ backgroundImage: `url(${hero.src})` }"
    ></div>
    <div class="post__description container">
      <h2 class="title">
        <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
      </h2>
      <p>
        {{ date }}
        {{ post.fields.description }}
        <br />
        <nuxt-link :to="post.fields.slug" class="more">Read more ⟶</nuxt-link>
      </p>
    </div>
  </article>
</template>
<script>
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
      return this.post.fields.publishDate;
    }
  }
};
</script>

<style lang="scss">
.post {
  position: relative;
  height: 500px;
  background-color: lightcoral;
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
    background-color: lightgreen;
    position: absolute;
    bottom: -30px;
    transform: translateX(-50%);
    left: 50%;
  }
}
</style>
