import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueSvgInlinePlugin from "vue-svg-inline-plugin";
import "vue-svg-inline-plugin/src/polyfills";

const app = createApp(App)

app.use(router).use(VueSvgInlinePlugin)

app.mount('#app')
