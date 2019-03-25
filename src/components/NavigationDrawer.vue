<template>
  <v-navigation-drawer persistent
                       :mini-variant="miniVariant"
                       :clipped="clipped"
                       v-model="drawer"
                       :temporary="temporary"
                       app>
    <v-list>
      <v-list-tile @click="selectItem()">
        <v-list-tile-title>All Feeds</v-list-tile-title>
        <v-list-tile-action v-if="!selectedFeed">
          <v-icon>done</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-list-tile value="true"
                   v-for="(feed, i) in feedNames"
                   :key="i"
                   @click="selectItem(feed)">
        <v-list-tile-title v-text="feed.title"></v-list-tile-title>
        <v-list-tile-action v-if="selectedFeed && selectedFeed.url === feed.url">
          <v-icon>done</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { VNavigationDrawer, } from 'vuetify/lib';

export default {
  data() {
    return {
      clipped: true,
      temporary: false,
      fixed: false,
      miniVariant: false
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters["isOpenDrawer"];
      },
      set(e) {
        this.$store.commit("toggleDrawer", e);
      }
    },
    selectedFeed() {
      return this.$store.getters['selectedFeed'];
    },
    feedNames() {
      return this.$store.getters["getFeedNames"];
    }
  },
  methods: {
    selectItem(feed) {
      this.$store.commit('selectFeed', feed);
    },
  },
  mounted() {
    if (this.feedNames.length == 0) {
      let feed = {
        title: "Vue.js Developers",
        url: "https://vuejsdevelopers.com/feed.xml"
      };
      this.$store.dispatch("fetchFeed", feed.url);
    }
  },
  components: {
    VNavigationDrawer,
  },
};
</script>

<style lang="stylus" scoped>
</style>