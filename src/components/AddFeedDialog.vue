<template>
  <v-layout row
            justify-center>
    <v-dialog v-model="dialog"
              persistent
              max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline"
                primary-title>Add Feed</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md
                       class="pa-0">
            <v-form ref="form"
                    v-model="valid"
                    lazy-validation>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Feed Url"
                                :rules="feedRules"
                                required
                                v-model="feed"
                                @keyup.enter="add"
                                type="url"
                                hint="Enter feed url"
                                autocomplete="off"
                                autofocus></v-text-field>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1"
                 flat
                 @click.native="cancel"
                 role="button">Cancel</v-btn>
          <v-btn color="primary"
                 dark
                 @click.native="add"
                 role="button">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { VDialog } from "vuetify/lib";
export default {
  data() {
    return {
      valid: true,
      feed: "",
      feedRules: [
        v => !!v || "Name is required",
        v =>
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
            v
          ) || "Url must be valid"
      ]
    };
  },
  computed: {
    dialog: {
      get() {
        return this.$store.getters["isOpenDialog"];
      },
      set(e) {
        this.$store.commit("toggleAddFeedDialog", e);
      }
    }
  },
  methods: {
    cancel() {
      this.$refs.form.reset();
      this.$store.commit("toggleAddFeedDialog", false);
    },
    add() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("fetchFeed", this.feed);
        this.$refs.form.reset();
      } else {
        console.error("err");
      }
    }
  },
  components: {
    VDialog
  }
};
</script>