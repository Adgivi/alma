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
        backgroundImage: `url(https:${post.fields.heroImage.fields.file.url}?w=${imgWidthToRequest})`
      }"
    ></div>
    <article class="container-narrow">
      <h1 class="post__title">{{ post.fields.title }}</h1>
      <span class="post__subtitle h-subtitle">{{ date }}</span>
      <Social
        :in="mobileSharingIn"
        :url="route"
        :title="post.fields.title"
        :description="post.fields.description"
        :hashtags="post.fields.hashtags"
      />
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

import Social from "@/components/Sharing";
import Overlay from "@/components/Overlay";
import { BASE_URL_PROD, POST_LOCALIZED_FORMAT } from "@/shared/constants";
import imgToRequestMixin from "@/shared/imgToRequestMixin";
import documentSizeMixin from "@/shared/documentSizeMixin";

export default {
  components: { Overlay, Social },
  mixins: [imgToRequestMixin, documentSizeMixin],
  mounted() {
    this.processBodyImages();
    this.onScroll();
  },
  methods: {
    url() {
      return window.location.href;
    },
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
    },
    onScroll() {
      window.addEventListener("scroll", () => {
        const SHOW_SHARING_PERCENT = 85;
        this.mobileSharingIn =
          this.getScrollPercentage() > SHOW_SHARING_PERCENT;
      });
    }
  },
  data() {
    return {
      slug: this.$route.params.slug,
      images: [],
      selectedImg: null,
      mobileSharingIn: false,
      route: BASE_URL_PROD + this.$route.fullPath
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
          property: "description",
          content: this.post.fields.description
        },
        {
          hid: "og:description",
          property: "og:description",
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
          content: `https:${this.post.fields.heroImage.fields.file.url}?w=700`
        },
        {
          hid: "og:url",
          property: "og:url",
          content: this.route
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.post {
  position: relative;
  overflow-x: hidden;
  padding-bottom: $inuit-global-spacing-unit;
  @media screen and (max-width: $f-breakpoint--tablet-portrait) {
    padding-bottom: #{$inuit-global-spacing-unit-tiny + $layout-sharing-size};
  }

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
      $max-height: 700px;
      position: relative;
      transform: translateX(-50%);
      left: 50%;
      max-width: 100vw;
      width: auto;
      max-height: $max-height;
      z-index: $z-index-post-img;
      @media screen and (max-height: #{$max-height + $layout-header-height}) {
        max-height: calc(
          100vh - #{$layout-header-height +$inuit-global-spacing-unit-large}
        );
      }
      display: block;
      &:hover {
        cursor: pointer;
      }
    }
    h2,
    h3 {
      padding-top: $inuit-global-spacing-unit-small;
    }
    p:last-child {
      margin-bottom: 0;
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
