import { createApp, h } from 'vue';
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import 'vue-global-api';
import './assets/bootstrap.js';
import './assets/tailwind.css';
import './features/useVeeValidations.js';

import DefaultLayout from './layouts/DefaultLayout.vue';
import BaseIcon from './components/BaseIcon.vue';

createInertiaApp({
  resolve: async (name) => {
    const page = (await import(`./pages/${name}.vue`)).default;
    page.layout ??= DefaultLayout;
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mixin({ methods: { route: window.route } })
      .component('InertiaLink', Link)
      .component('InertiaHead', Head)
      .component('BaseIcon', BaseIcon)
      .mount(el);
  },
  title: (title) => (title ? `Immersion Hub | ${title}` : 'Immersion Hub'),
});

InertiaProgress.init({
  color: '#DB5461',
});
