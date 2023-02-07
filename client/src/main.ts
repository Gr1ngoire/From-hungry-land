import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify, {type ToastContainerOptions} from "vue3-toastify";
import { FontAwesomeIcon } from "./plugins/fontAwesome";
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'vue3-toastify/dist/index.css';

const DEFAULT_MILLISECONDS_TIMEOUT = 3000;

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia())
app.use(router)
app.use(Vue3Toastify, {
    autoClose: DEFAULT_MILLISECONDS_TIMEOUT,
} as ToastContainerOptions);

app.mount('#app')
