import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { FontAwesomeIcon } from "./plugins/fontAwesome";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia())
app.use(router)

app.mount('#app')
