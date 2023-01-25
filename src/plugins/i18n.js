import Vue from 'vue';
import VueI18n from 'vue-i18n';

// 匯入語言檔
import en from '@/../locales/en.json';
import tw from '@/../locales/tw.json';

// 使用VueI18n插件
Vue.use(VueI18n);

// 取得預設語系
const locale = localStorage.getItem('locale') || 'tw';

// 建立 VueI18n 實體
const i18n = new VueI18n({
  locale,
  messages: { en, tw },
});

export default i18n;

// import Vue from 'vue';
// import VueI18n from 'vue-i18n';

// import en from '@/../locales/en.json';
// import tw from '@/../locales/zh-Hant-TW.json';

// Vue.use(VueI18n);

// let browserLanguage = window.navigator.language;

// if (browserLanguage.toLowerCase() === 'en') {
//   browserLanguage = 'en';
// } else {
//   browserLanguage = 'tw';
// }

// const messages = {
//   en: en,
//   tw: tw,
// };

// export const i18n = new VueI18n({
//   locale: browserLanguage, // set locale
//   fallbackLocale: browserLanguage,
//   messages, // set locale messages
// });

// // function loadLocaleMessages() {
// //   const locales = require.context(
// //     './locales',
// //     true,
// //     /[A-Za-z0-9-_,\s]+\.json$/i,
// //   );
// //   const messages = {};
// //   locales.keys().forEach((key) => {
// //     const matched = key.match(/([A-Za-z0-9-_]+)\./i);
// //     if (matched && matched.length > 1) {
// //       const locale = matched[1];
// //       messages[locale] = locales(key).default;
// //     }
// //   });
// //   return messages;
// // }

// // export default {
// //   legacy: false,
// //   locale: process.env.VUE_APP_I18N_LOCALE || 'en',
// //   fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
// //   messages: loadLocaleMessages(),
// //   globalInjection: true,
// // };

// // // i18n.js
// import Vue from 'vue';
// import VueI18n from 'vue-i18n';

// // 匯入語言檔
// import en from '@/../locales/en.json';
// import tw from '@/../locales/zh-Hant-TW.json';

// // 使用VueI18n插件
// Vue.use(VueI18n);

// // 取得預設語系
// const locale = localStorage.getItem('locale') || 'tw';

// // 建立 VueI18n 實體
// const i18n = new VueI18n({
//   locale,
//   messages: { en, tw },
// });

// export default i18n;
