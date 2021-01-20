<template>
  <section class="post">
    <Overlay
      :show="!!selectedImg"
      @click-overlay="shrinkImage"
      @click-close="shrinkImage"
    >
      <div
        v-html="this.selectedImg && this.selectedImg.outerHTML"
        v-on:click="onClickSelectedImg"
      />
    </Overlay>
    <div
      class="post__hero"
      :style="{
        backgroundImage: `url(https://${post.fields.heroImage.fields.file.url}?w=${imgWidthToRequest})`
      }"
    ></div>
    <article class="post__body-wrapper container">
      <h1 class="post__title">{{ post.fields.title }}</h1>
      <span class="post__subtitle h-subtitle">{{ date }}</span>
      <div class="post__body" v-html="$md.render(post.fields.bodyIntro)"></div>
      <div class="post__track"><span v-html="post.fields.iframe"></span></div>
      <div
        class="post__body"
        v-html="$md.render(post.fields.body)"
        ref="body"
      ></div>
    </article>
  </section>
</template>

<script>
import { uid } from "uid";

import Overlay from "@/components/Overlay";
import { POST_LOCALIZED_FORMAT } from "@/shared/constants";
import imgToRequestMixin from "@/shared/imgToRequestMixin";

export default {
  components: { Overlay },
  mixins: [imgToRequestMixin],
  mounted() {
    this.processBodyImages();
  },
  methods: {
    getBodyImages() {
      return this.$refs.body.getElementsByTagName("img");
    },
    onClickBodyImage(e) {
      e.stopPropagation();
      this.selectedImg = e.target.cloneNode();
      this.selectedImg.classList.add("image-selected");
    },
    shrinkImage() {
      this.selectedImg = null;
    },
    onClickSelectedImg: e => e.stopPropagation(),
    processBodyImages() {
      const bodyImages = this.getBodyImages();
      const processImg = img => {
        const id = uid();
        img.setAttribute("id", id);
        img.addEventListener("click", this.onClickBodyImage);
        this.images.push(img);
      };
      const processParent = node => {
        const parent = node.parentNode;
        parent.setAttribute(
          "style",
          `height: ${parent.scrollHeight}px; display: block;`
        );
      };
      for (const img of bodyImages) {
        // processParent(img);
        processImg(img);
      }
    }
  },
  data() {
    return {
      slug: this.$route.params.slug,
      images: [],
      selectedImg: null
    };
  },
  computed: {
    post() {
      return this.$store.getters.getPostBySlug(this.slug);
    },
    date() {
      return this.$dayjs(this.post.fields.publishDate).format(
        POST_LOCALIZED_FORMAT
      );
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
    @media (orientation: portrait) {
      height: height-from-ratio(5, 3);
    }
  }
  &__title {
    text-align: center;
    padding: $inuit-global-spacing-unit $inuit-global-spacing-unit-large;
    margin-bottom: 0;
    @media screen and (max-width: $f-breakpoint--tablet-portrait) {
      padding: $inuit-global-spacing-unit 0;
    }
    @media screen and (max-width: $f-breakpoint--mobile-portrait) {
      padding: $inuit-global-spacing-unit-small 0;
    }
  }
  &__subtitle {
    text-align: center;
  }
  &__body {
    img {
      position: relative;
      transform: translateX(-50%);
      left: 50%;
      max-width: 100vw;
      width: auto;
      max-height: 700px;
      display: block;
      &:hover {
        cursor: pointer;
      }
    }
    h2,
    h3 {
      padding-top: $inuit-global-spacing-unit-small;
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
.image-selected {
  position: fixed;
  max-width: 100vw;
  max-height: 100vh;
  z-index: $z-index-in-overlay;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
</style>
