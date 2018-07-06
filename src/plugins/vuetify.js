// main.js
import Vue from 'vue';
import {
    Vuetify, // required
    VApp, // required
    VNavigationDrawer,
    VFooter,
    VList,
    VIcon,
    VBtn,
    VToolbar,
    VGrid,
    VCard,
    VDialog,
    VTextField,
    transitions
} from 'vuetify';
import {
    Ripple
} from 'vuetify/es5/directives';
import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
    components: {
        VApp,
        VNavigationDrawer,
        VFooter,
        VList,
        VIcon,
        VBtn,
        VToolbar,
        VGrid,
        VCard,
        VDialog,
        VTextField,
        transitions
    },
    directives: {
        Ripple
    }
});