// main.js
import Vue from 'vue';
import Vuetify, {
  VApp, // required
  VFlex,
  VLayout,
  VContainer,
  VSpacer,
  VContent,
  VList,
  VListTile,
  VListTileTitle,
  VListTileAction,
  VCard,
  VCardTitle,
  VCardText,
  VCardActions,
  VIcon,
  VBtn,
  VTextField,
  VForm,
  VProgressCircular,
  VSlideYTransition,
} from 'vuetify/lib';
import { Ripple } from 'vuetify/lib/directives';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: {
    VApp,
    VFlex,
    VLayout,
    VContainer,
    VSpacer,
    VContent,
    VList,
    VListTile,
    VListTileTitle,
    VListTileAction,
    VIcon,
    VBtn,
    VCard,
    VCardTitle,
    VCardText,
    VCardActions,
    VTextField,
    VForm,
    VProgressCircular,
    VSlideYTransition,
  },
  directives: {
    Ripple,
  },
});
