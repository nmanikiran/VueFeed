<template>
  <v-container fluid class="pb-0">
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <h3 class="headline mb-0">{{item.title}}</h3>
            </v-card-title>
            <v-card-text>
              <p class="html-value" v-html="item.description"></p>
            </v-card-text>
            <v-card-actions>
              <a :href="item.link" target="_blank" flat color="orange">Open link</a>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
export default {
  name: "FeedCard",
  props: ["item"]
};
</script>



<style>
.html-value blockquote {
  background: #f9f9f9;
  border-left: 4px solid #ccc;
  margin: 5px 0;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
.html-value blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
.html-value img {
  width: 100%;
}
.html-value code {
  max-width: 100%;
  word-break: break-word;
  padding: 0 1em;
}
.html-value div {
  width: 100%;
}
</style>
