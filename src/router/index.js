import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/test',
    name: 'Test Page',
    component: () => import('@/components/Test_page.vue'),
  },
  {
    path: '/login',
    name: 'Login Page',
    component: () => import('@/components/Login_test.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// import Vue from 'vue';
// import Router from 'vue-router';
// import { i18n } from '../plugins/i18n';

// Vue.use(Router);

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '@/../../../locales/',
//       component: {
//         template: '',
//       },
//       beforeEnter(to, from, next) {
//         const lang = to.params.lang;

//         // 如果 URL 非 en、tw 則導至瀏覽器預設語言
//         if (!['en', 'tw'].includes(lang)) {
//           return next(i18n.locale);
//         }

//         // 如果 URL 有語系，則置換 i18n 語言
//         if (i18n.locale !== lang) {
//           i18n.locale = lang;
//         }

//         return next();
//       },
//       children: [
//         {
//           path: '/',
//           name: 'Test Page',
//           component: () => import('@/components/Test_page.vue'),
//         },
//         {
//           path: '/login',
//           name: 'Login Page',
//           component: () => import('@/components/Login_test.vue'),
//         },
//       ],
//     },
//   ],
// });
