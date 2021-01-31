<template>
  <div class="sharing" ref="container">
    <ShareNetwork
      v-for="network in networks"
      :network="network.name"
      :url="'url'"
      :title="'title'"
      :description="'description'"
      :hashtags="'hashtags'"
      class="sharing__network"
      :style="{ backgroundColor: network.color }"
    >
      <font-awesome-icon :icon="['fab', network.icon]" />
    </ShareNetwork>
    <div class="shadow"></div>
  </div>
</template>
<script>
import { BREAKPOINTS, SOCIAL_NETWORKS_SHARING } from "@/shared/constants";

export default {
  props: ["url", "title", "description", "hashtags"],
  mounted() {
    this.initialOffset = this.containerRef.offsetTop;
    this.setStickState();
    this.onScroll();
    // this.onResize();
  },
  computed: {
    containerRef: function() {
      return this.$refs.container;
    }
  },
  data() {
    return { networks: SOCIAL_NETWORKS_SHARING, stickClass: "sharing--stick" };
  },
  methods: {
    // TODO: Extract to plugin
    isDesktop: () => {
      return (
        document.documentElement.scrollWidth >= BREAKPOINTS.TABLET_PORTRAIT
      );
    },
    stick() {
      this.containerRef.classList.add(this.stickClass);
    },
    unstick() {
      this.containerRef.classList.remove(this.stickClass);
    },
    setTopStickState() {
      this.containerRef.style = {};
      window.pageYOffset > this.initialOffset ? this.stick() : this.unstick();
    },
    setBottomStickState() {
      const [footer] = document.body.getElementsByClassName("footer");
      const pageYBottomOffset = window.pageYOffset + window.innerHeight;
      const scrollOverFooterOffset = pageYBottomOffset - footer.offsetTop;

      this.containerRef.style.position =
        scrollOverFooterOffset >= 0 ? "absolute" : "fixed";
    },
    fadeIn() {
      this.containerRef.classList.add("in");
    },
    setStickState() {
      if (this.isDesktop()) {
        this.setTopStickState();
      } else {
        this.setBottomStickState();
      }
      this.fadeIn();
    },
    onScroll() {
      window.addEventListener(
        "scroll",
        this.isDesktop() ? this.setTopStickState : this.setBottomStickState
      );
    }
    // onResize() {
    //   window.onresize = () => {
    //     if (this.isDesktop()) {
    //       window.removeEventListener("scroll", this.setBottomStickState);
    //       this.setTopStickState();
    //       window.addEventListener("scroll", this.setTopStickState);
    //     } else {
    //       window.removeEventListener("scroll", this.setTopStickState);
    //       // this.setBottomStickState();
    //       window.addEventListener("scroll", this.setBottomStickState);
    //     }
    //   };
    // }
  }
};
</script>

<style lang="scss">
.sharing {
  $layout-breakpoint-sharing: $f-breakpoint--tablet-portrait;
  $size: $layout-sharing-size;
  padding-top: $inuit-global-spacing-unit-tiny;
  display: flex;
  flex-direction: column;
  position: absolute;
  $margin: calc((100vw - #{$global-container-width}) / 2);
  left: calc(#{$margin} - #{$size});
  z-index: $z-index-sharing;
  opacity: 0;
  transition: opacity 200ms ease-in-out;

  &.in {
    opacity: 1;
  }

  &--stick {
    position: fixed;
    top: $layout-header-height;
  }

  @media screen and (max-width: #{$global-container-width + $size * 2}) {
    left: 0;
  }
  @media screen and (max-width: $layout-breakpoint-sharing) {
    position: fixed;
    flex-direction: row;
    &,
    &--stick {
      top: auto;
      bottom: 0;
    }
  }

  &__network {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $size;
    width: $size;
    color: white;
    &:hover {
      color: white;
    }
  }
}
</style>
