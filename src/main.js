import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import StoryblockVue from '@storyblok/vue'
import ElementPlus from '@/plugins/element/index.js'

import 'material-icons/iconfont/material-icons.css';

import '@/assets/css/main.css';
import '@/assets/css/responsive.css';
import "@/plugins/element/index.js";
import 'animate.css';

const app = createApp(App)

app.use(router)
app.use(StoryblockVue)
app.use(ElementPlus)
app.mount('#app')
