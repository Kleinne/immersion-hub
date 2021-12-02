import { createApp, h } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3';
import 'vue-global-api';
import './assets/bootstrap.js';
import './assets/tailwind.css';
import './features/useVeeValidations.js';

import DefaultLayout from './layouts/DefaultLayout.vue';
import BaseIcon from './components/BaseIcon.vue';

const setDefaultLayout = ({ default: page }) => {
  // eslint-disable-next-line no-param-reassign
  page.layout = page.layout === undefined ? DefaultLayout : page.layout;
  return page;
};

createInertiaApp({
  resolve: async (name) => import(`./pages/${name}.vue`).then(setDefaultLayout),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mixin({ methods: { route: window.route } })
      .component('InertiaLink', Link)
      .component('BaseIcon', BaseIcon)
      .mount(el);
  },
});
