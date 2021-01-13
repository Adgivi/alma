<template>
  <article class="entry">
    <div
      class="entry__hero"
      :style="{ backgroundImage: `url(${hero.src})` }"
    ></div>
    <div class="entry__description-container container">
      <h2 class="entry__title">
        <nuxt-link :to="post.fields.slug">{{ post.fields.title }}</nuxt-link>
      </h2>
      <span class="entry__info">{{ date }}</span>
      <div class="entry__description">
        {{ post.fields.description }}
      </div>
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
.entry {
  position: relative;
  height: 500px;
  margin-bottom: 3px;
  @media (orientation: portrait) {
    height: auto;
  }
  &__hero {
    z-index: $z-index-post-hero;
    height: 500px;
    background-size: cover;
    background-position: center;
    @media (orientation: portrait) {
      height: height-from-ratio(5, 4);
    }
  }
  &__description-container {
    z-index: $z-index-post-description;
    height: 190px;
    background-color: $f-color__neutral-white;
    position: absolute;
    bottom: -30px;
    transform: translateX(-50%);
    left: 50%;
    padding-top: 12px;
    padding-bottom: 15px;
    @media (orientation: portrait) {
      height: auto;
      position: static;
      transform: translateX(0);
      bottom: 0;
    }
    // Tablet
    @media screen and (max-width: $f-breakpoint--tablet-portrait) {
      padding-top: 10px;
      padding-bottom: 12px;
    }
    // mobile
    @media screen and (max-width: $f-breakpoint--mobile-landscape) {
      padding-top: 8px;
      padding-bottom: 10px;
    }
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
    @media screen and (max-width: $f-breakpoint--mobile-portrait) {
      font-size: $f-font-size--xs;
    }
  }
  &__description {
    max-height: 60px;
    overflow: hidden;
    @media (orientation: portrait) {
      max-height: none;
    }
  }
}
</style>
