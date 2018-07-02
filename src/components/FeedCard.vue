<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column >
    <v-flex xs12>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.title}}</h3>
            <p v-html="item.description"></p>  
        </div>
        </v-card-title>
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
  name: 'FeedCard',
  props: ['item']
};
</script>

