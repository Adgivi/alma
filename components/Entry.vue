<template>
  <article class="entry">
    <div
      class="entry__hero"
      :style="{
        backgroundImage: `url(https://${hero.src}?w=${imgWidthToRequest})`
      }"
    ></div>
    <div class="entry__description-container container">
      <h2 class="entry__title">
        <nuxt-link
          :to="localePath({ name: 'slug', params: { slug: post.fields.slug } })"
        >
          {{ post.fields.title }}
        </nuxt-link>
      </h2>
      <span class="h-subtitle entry__info">{{ date }}</span>
      <div class="entry__description">
        {{ post.fields.description }}
      </div>
    </div>
  </article>
</template>
<script>
import { POST_LOCALIZED_FORMAT } from "@/shared/constants";
import imgToRequestMixin from "@/shared/imgToRequestMixin";

export default {
  mixins: [imgToRequestMixin],
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
      return this.$dayjs(this.post.fields.publishDate).format(
        POST_LOCALIZED_FORMAT
      );
    }
  }
};
</script>

<style lang="scss">
.entry {
  position: relative;
  height: 500px;
  line-height: 1.3;
  & + & {
    margin-top: 5px;
  }
  @media screen and (max-width: $f-breakpoint--tablet-portrait) {
    margin-top: 0;
    height: auto;
    & + & {
      margin-top: 0;
    }
  }
  &__hero {
    z-index: $z-index-post-hero;
    height: 500px;
    background-size: cover;
    background-position: center;
    @media screen and (max-width: $f-breakpoint--tablet-portrait) {
      height: height-from-ratio(5, 3);
    }
  }
  &__description-container {
    z-index: $z-index-post-description;
    height: 190px;
    background-color: $f-color__neutral-white;
    position: absolute;
    bottom: -$layout-entry-bottom-offset;
    transform: translateX(-50%);
    left: 50%;
    padding-top: 12px;
    padding-bottom: 15px;
    @media screen and (max-width: $f-breakpoint--tablet-portrait) {
      height: auto;
      position: static;
      transform: translateX(0);
      bottom: 0;
      padding-top: 10px;
      padding-bottom: 12px;
    }
  }
  &__title {
    margin-bottom: $inuit-global-spacing-unit-small;
  }
  &__info {
    margin-bottom: $inuit-global-spacing-unit-tiny;
    @media screen and (max-width: $f-breakpoint--mobile-portrait) {
      font-size: $f-font-size--xs;
    }
  }
  &__description {
    max-height: 60px;
    overflow: hidden;
    @media screen and (max-width: $f-breakpoint--tablet-portrait) {
      max-height: none;
    }
  }
}
</style>
