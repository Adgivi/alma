import client from "~/plugins/contentful";

export const state = () => ({
  posts: null
});

export const getters = {
  getPostBySlug: state => slug => {
    return state.posts.find(el => el.fields.slug === slug);
  }
};

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  }
};

export const actions = {
  async getPosts({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "blogPost",
        locale: this.$i18n.locale
      });
      // TODO: Loader
      // setTimeout(() => {
      if (response.items.length > 0) commit("updatePosts", response.items);
      // }, 5000);
    } catch (err) {
      console.error(err);
    }
  }
};
