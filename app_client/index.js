import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import 'vue-global-api';

import './bootstrap.js';

import DefaultLayout from '@/layouts/DefaultLayout.vue';

const setDefaultLayout = ({ default: page }) => {
  page.layout = page.layout === undefined ? DefaultLayout : page.layout;
  return page;
};

createInertiaApp({
  resolve: async (name) => import(`./pages/${name}.vue`).then(setDefaultLayout),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
