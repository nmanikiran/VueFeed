import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenDrawer: true,
    isOpenDialog: false,
    selectedFeed: null,
    feedItems: [],
    feedNames: [],
  },
  getters: {
    isOpenDrawer: (state) => state.isOpenDrawer,
    isOpenDialog: (state) => state.isOpenDialog,
    selectedFeed: (state) => state.selectedFeed,
    getFeedItems: (state) => state.feedItems,
    getFeedNames: (state) => state.feedNames,
  },
  mutations: {
    toggleDrawer(state, payload) {
      payload = typeof payload === 'undefined' ? !state.isOpenDrawer : payload;
      state.isOpenDrawer = payload;
    },
    toggleAddFeedDialog(state, payload) {
      payload = typeof payload === 'undefined' ? !state.isOpenDialog : payload;
      state.isOpenDialog = payload;
    },
    updateFeedItems(state, data) {
      data.items.forEach((i) => (i.feedUrl = data.feed.url));
      state.feedItems = [...data.items, ...state.feedItems];
    },
    addFeedName(state, feed) {
      state.feedNames = [feed, ...state.feedNames];
    },
    selectFeed(state, feed) {
      state.selectedFeed = feed;
    },
  },
  actions: {
    async fetchFeed({ commit }, feedUrl) {
      if (!feedUrl) return;
      const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=`;
      const resposne = await fetch(`${rssUrl}` + encodeURIComponent(feedUrl));
      const data = await resposne.json();
      commit('toggleAddFeedDialog', false);
      commit('updateFeedItems', data);
      commit('addFeedName', data.feed);
    },
  },
});
