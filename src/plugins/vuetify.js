// main.js
import Vue from 'vue';
import {
    Vuetify, // required
    VApp, // required
    VNavigationDrawer,
    VList,
    VIcon,
    VBtn,
    VToolbar,
    VGrid,
    VCard,
    VDialog,
    VTextField,
    VForm,
    VProgressCircular,
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
        VList,
        VIcon,
        VBtn,
        VToolbar,
        VGrid,
        VCard,
        VDialog,
        VTextField,
        VForm,
        VProgressCircular,
        transitions
    },
    directives: {
        Ripple
    }
});