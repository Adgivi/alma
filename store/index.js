import client from "~/plugins/contentful";

export const state = () => ({
  posts: null,
  isFetching: false
});

export const getters = {
  getPostBySlug: state => slug => {
    return state.posts.find(el => el.fields.slug === slug);
  }
};

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  setFetching: (state, value) => (state.isFetching = value)
};

export const actions = {
  async getPosts({ commit }) {
    commit("setFetching", true);
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "blogPost",
        locale: this.$i18n.locale
      });
      if (response.items.length > 0) commit("updatePosts", response.items);
      commit("setFetching", false);
    } catch (err) {
      console.error(err);
      commit("setFetching", false);
    }
  }
};
