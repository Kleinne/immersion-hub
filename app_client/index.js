import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import "./bootstrap.js";

createInertiaApp({
    resolve: async (name) => {
        const page = (await import(`./pages/${name}.vue`)).default;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});
