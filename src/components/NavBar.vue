<template>
  <v-toolbar app
             dark
             color="primary"
             class="white--text"
             :clipped-left="clipped">
    <v-toolbar-side-icon @click.stop="openDrawer"></v-toolbar-side-icon>

    <v-toolbar-title v-text="title"></v-toolbar-title>
    <v-spacer class="hidden-xs"></v-spacer>

    <v-btn icon
           @click.stop="openAddFeedDialog()"
           title="Add Feed"
           role="button">
      <v-icon>add</v-icon>
    </v-btn>
    <v-btn icon
           @click="changeColor"
           title="Color Change"
           role="button">
      <v-icon>format_color_fill</v-icon>
    </v-btn>
    <v-btn icon
           title="Github Repo"
           role="button">
      <a href="https://github.com/nmanikiran/VueFeed"
         target="_blank">
        <img src="img/github-circle-white-transparent.svg"
             alt="github">
      </a>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      title: "VueFeed",
      clipped: true
    };
  },
  methods: {
    openDrawer() {
      this.$store.commit("toggleDrawer");
    },
    openAddFeedDialog() {
      this.$store.commit("toggleAddFeedDialog", true);
    },
    changeColor() {
      const hash = "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.$vuetify.theme.primary = hash;
    }
  }
};
</script>

<style scoped>
</style>