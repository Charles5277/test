import Vue from 'vue';
import { createApp } from 'vue';
import pinia from '@/store';
import router from '@/router';
// import { i18n } from '@/plugins/vuetify';
import './style.css';
import App from './App.vue';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

Vue.config.productionTrip = false;

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});

app.use(pinia);
app.use(router);
app.use(vuetify);
// app.use(i18n);
app.mount('#app');
