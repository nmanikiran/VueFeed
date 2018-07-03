<template>
  <v-app :dark="isDark">
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      :temporary="temporary"
      app
    >
      <v-list>
        <v-list-tile @click="selectItem()">
          <v-list-tile-title>
            All Feeds
          </v-list-tile-title>
           <v-list-tile-action v-if="selectedFeed && !selectedFeed.feed">
            <v-icon>done</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-list-tile
          value="true"
          v-for="(item, i) in feedData"
          :key="i"
          @click="selectItem(item)"
        >
            <v-list-tile-title v-text="item.feed.title"></v-list-tile-title>
          <v-list-tile-action v-if="selectedFeed && selectedFeed.feed && selectedFeed.feed.url === item.feed.url">
            <v-icon>done</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer class="hidden-xs"></v-spacer>
      <v-btn icon @click="changeColor" title="Color Change">
        <v-icon>format_color_fill</v-icon>
      </v-btn>
     <v-btn icon @click.stop="openAddFeedDialog()" title="Add Feed">
        <v-icon>add</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
       <div class="text-xs-center" v-if="feedItems.length == 0 && isLoading">
      <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
      class="mt-5"
    ></v-progress-circular>
       </div>
      <div v-for="(item, i) in feedItems" :key="i">
            <FeedCard :item="item"/>
      </div>
      <AddFeedDialog :dialog="dialog" @addFeed="addFeed"/>
    </v-content>
 
    <v-footer :fixed="fixed" app class="text-xs-center">
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>
<style>
@media screen and (max-width: 768px) {
  body {
    font-size: 16px;
  }
}
</style>

<script>
import FeedCard from './components/FeedCard';
import AddFeedDialog from './components/AddFeedDialog';

function isMobile() {
  return window.innerWidth < 993;
}
export default {
  name: 'App',
  components: {
    FeedCard,
    AddFeedDialog
  },
  data() {
    let mobile = isMobile();
    window.addEventListener('resize', function(){
      mobile = isMobile();
    }, false);

    return {
      clipped: true,
      drawer: !mobile,
      temporary: mobile,
      fixed: false,
      dialog: false,
      feedData: [],
      isLoading: false,
      isDark: false,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Inspire'
        }
      ],
      feedItems: [],
      miniVariant: false,
      title: 'VueFeed',
      selectedFeed: {}
    };
  },
  methods: {
    openAddFeedDialog() {
      this.dialog = true;
    },
    selectItem(feed) {
      if (feed) {
        this.selectedFeed = feed;
        this.feedItems = feed.items;
      } else {
        this.selectedFeed = {};
        this.feedData.forEach(item => {
          this.feedItems.concat(item.items);
        });
      }
    },
    addFeed(e, url) {
      this.dialog = e;
      this.isLoading = true;
      if (!url) return;
      const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=`;
      fetch(`${rssUrl}` + encodeURIComponent(url)).then(res => {
        res.json().then(data => {
          this.isLoading = false;
          const { url } = data.feed;
          const item = this.feedData.find(i => i.url == url);
          if (!item) {
            this.feedData.push({ feed: data.feed, items: data.items });
          }
          if (this.selectedFeed) {
            this.selectedFeed = { feed: data.feed, items: data.items };
          }
          this.feedItems = data.items.concat(this.feedItems);
        });
      });
    },
    changeColor() {
      this.isDark = !this.isDark;
      // this.$vuetify.theme.primary = '#673AB7';
    }
  },
  mounted() {
    if (this.feedData.length == 0) {
      let feed = {
        title: 'Vue.js Developers',
        url: 'https://vuejsdevelopers.com/feed.xml'
      };
      this.addFeed(false, feed.url);
    }
  }
};
</script>
