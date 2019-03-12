// main.js
import Vue from 'vue';
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
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
  VToolbar,
  VToolbarTitle,
  VToolbarSideIcon,
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
    VNavigationDrawer,
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
    VToolbar,
    VToolbarTitle,
    VToolbarSideIcon,
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
