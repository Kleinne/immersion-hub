import { createApp, h } from 'vue';
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

import ECharts from 'vue-echarts';
import { use as useEChart } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';

import 'vue-global-api';
import './assets/bootstrap.js';
import './assets/tailwind.css';
import './features/useVeeValidations.js';

import DefaultLayout from './layouts/DefaultLayout.vue';
import BaseIcon from './components/BaseIcon.vue';
import BaseButton from './components/BaseButton.vue';

useEChart([CanvasRenderer, LineChart, GridComponent, TooltipComponent]);

declare global {
  interface Window {
    route?: any;
  }
}

createInertiaApp({
  resolve: async (name) => {
    const page = (await import(`./pages/${name}.vue`)).default;
    page.layout = page.layout === undefined ? DefaultLayout : page.layout;
    return page;
  },
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .use(plugin)
      // ziggy
      .mixin({ methods: { route: window.route } })
      // inertia
      .component('InertiaLink', Link)
      .component('InertiaHead', Head)
      // components
      .component('EChart', ECharts)
      .component('BaseIcon', BaseIcon)
      .component('BaseButton', BaseButton)
      .mount(el);
  },
  title: (title) => (title ? `Book Cafe | ${title}` : 'Book Cafe'),
});

InertiaProgress.init({
  color: '#DB5461',
});
