import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import colors from 'vuetify/lib/util/colors';
import VueI18n from 'vue-i18n';

import en from '@/../locales/en.json';
import tw from '@/../locales/tw.json';

Vue.use(Vuetify);
Vue.use(VueI18n);

const messages = {
  en: en,
  tw: tw,
};

// 檢測瀏覽器語言
let browserLanguage = window.navigator.language;

if (browserLanguage.toLowerCase() === 'en') {
  browserLanguage = 'en';
} else {
  browserLanguage = 'tw';
}

// 實例化 vuei18n
const i18n = new VueI18n({
  locale: browserLanguage,
  messages,
});

const opts = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#409eff',
        secondary: '#54a8ff',
        accent: '#9c27b0',
        error: '#f44336',
        warning: '#ff5722',
        info: '#607d8b',
        success: '#4caf50',
      },
      dark: {
        primary: colors.blue.darken1,
      },
    },
  },
  // vuetify 設定中增加 i18n lang
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
};

const vuetify = new Vuetify(opts);
// 導出 i18n
export { vuetify, i18n };
