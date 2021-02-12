<template>
  <div class="sharing" ref="container">
    <ShareNetwork
      v-for="network in networks"
      :network="network.name"
      :url="url"
      :title="title"
      :description="description"
      :hashtags="hashtags"
      class="sharing__network"
      @click="() => onClickNetwork(network)"
    >
      <span
        class="sharing__net-placeholder"
        :style="networkStyles(network)"
        @mouseenter="() => onMoseEnterNet(network)"
        @mouseleave="onMoseLeaveNet"
      >
        <font-awesome-icon
          class="sharing__net-icon"
          :icon="[
            network.icon.type || 'fab',
            network.icon.name || network.icon
          ]"
        />
      </span>
    </ShareNetwork>
    <div class="shadow"></div>
  </div>
</template>
<script>
import { BREAKPOINTS, SOCIAL_NETWORKS_SHARING } from "@/settings/constants";
import documentSizeMixin from "~/shared/documentSizeMixin";
import { ACTION, CATEGORY } from "@/settings/analytics";

export default {
  mixins: [documentSizeMixin],
  props: ["url", "title", "description", "hashtags", "in"],
  mounted() {
    this.initialOffset = this.containerRef.offsetTop;
    this.setStickState();
    this.onScroll();
    // this.onResize();
  },
  computed: {
    containerRef() {
      return this.$refs.container;
    }
  },
  data() {
    return {
      networks: SOCIAL_NETWORKS_SHARING,
      stickClass: "sharing--stick",
      selectedNetwork: null
    };
  },
  watch: {
    in() {
      !this.isDesktop() && this.toggleFade();
    }
  },
  methods: {
    // TODO: Extract to plugin
    isDesktop: () => {
      return (
        document.documentElement.scrollWidth >= BREAKPOINTS.TABLET_PORTRAIT
      );
    },
    onClickNetwork(network) {
      this.$ga.event({
        eventCategory: CATEGORY.SHARING,
        eventAction: ACTION.CLICK,
        eventLabel: network.name
      });
    },
    networkStyles(network) {
      return {
        backgroundColor:
          this.selectedNetwork && this.selectedNetwork.name === network.name
            ? network.color
            : "transparent"
      };
    },
    onMoseEnterNet(network) {
      this.selectedNetwork = network;
    },
    onMoseLeaveNet() {
      this.selectedNetwork = null;
    },
    stick() {
      this.containerRef.classList.add(this.stickClass);
      const TRANSITION_TO_BOTTOM_PERCENT = 85;
      if (this.getScrollPercentage() >= TRANSITION_TO_BOTTOM_PERCENT) {
        this.containerRef.style.top = `calc(100vh - ${this.containerRef.offsetHeight}px)`;
      }
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
    toggleFade() {
      this.in ? this.fadeIn() : this.fadeOut();
    },
    fadeOut() {
      this.containerRef.classList.remove("in");
    },
    fadeIn() {
      this.containerRef.classList.add("in");
    },
    setStickState() {
      if (this.isDesktop()) {
        this.setTopStickState();
        this.fadeIn();
      } else {
        this.setBottomStickState();
      }
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
  $self: &;
  $layout-breakpoint-sharing: $f-breakpoint--tablet-portrait;
  $size: $layout-sharing-size;
  $size-mb: $layout-sharing-size-mb;
  //padding-top: $inuit-global-spacing-unit-tiny;
  display: flex;
  flex-direction: column;
  position: absolute;
  $margin: calc((100vw - #{$global-container-width}) / 2);
  left: calc(#{$margin} - #{$size});
  z-index: $z-index-sharing;
  opacity: 0;
  padding-bottom: #{$layout-footer-height + $inuit-global-spacing-unit};
  @include transition-fast(opacity);

  &.in {
    opacity: 1;
  }

  &--stick {
    position: fixed;
    top: $layout-header-height;
    transition: top 700ms ease-out;
  }

  @media screen and (max-width: #{$global-container-width + $size * 2}) {
    left: 0;
  }
  @media screen and (max-width: $layout-breakpoint-sharing) {
    position: fixed;
    flex-direction: row;
    z-index: $z-index-sharing-mb;
    background-color: rgba(255, 255, 255, 0.85);
    padding-bottom: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    &,
    &--stick {
      top: auto;
      bottom: 0;
    }
  }

  &__network {
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: $size;
    width: $size;
    color: $f-color__neutral-grey--dark;
    position: relative;

    &:hover {
      color: white;
    }
    @media screen and (max-width: $layout-breakpoint-sharing) {
      font-size: 1.3rem;
      height: $size-mb;
      width: $size-mb;
    }
  }

  &__net-placeholder {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @include transition-fast($property: background-color);
  }
  &__net-icon {
    z-index: 2;
  }
}
</style>
