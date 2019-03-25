<template>
  <v-app>
    <NavigationDrawer></NavigationDrawer>
    <NavBar></NavBar>
    <v-content>
      <div class="text-xs-center"
           v-if="filteredFeedItems.length == 0">
        <v-progress-circular :size="70"
                             :width="7"
                             color="primary"
                             indeterminate
                             class="mt-5"></v-progress-circular>
      </div>
      <div v-for="(item, i) in filteredFeedItems"
           :key="i">
        <FeedCard :item="item" />
      </div>
      <AddFeedDialog />
    </v-content>

    <div class="text-lg-center pa-4">
      Made with ❤ by &nbsp;
      <a href="https://github.com/nmanikiran"
         target="_blank">Mani Kiran</a>
    </div>
  </v-app>
</template>


<script>
import FeedCard from "./components/FeedCard";
import AddFeedDialog from "./components/AddFeedDialog";
import NavigationDrawer from "./components/NavigationDrawer";
import NavBar from "./components/NavBar";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    FeedCard,
    AddFeedDialog,
    NavigationDrawer,
    NavBar
  },
  data() {
    return {};
  },
  computed: {
    selectedFeed() {
      return this.$store.getters['selectedFeed'];
    },
    feedItems() {
      return this.$store.getters["getFeedItems"];
    },
    filteredFeedItems() {
      if (!this.selectedFeed) return this.feedItems;
      return this.feedItems.filter(i => i.feedUrl === this.selectedFeed.url);
    }
  },

};
</script>

<style>
@media screen and (max-width: 768px) {
  body {
    font-size: 16px;
  }
  .v-footer {
    justify-content: center;
  }
}
</style>