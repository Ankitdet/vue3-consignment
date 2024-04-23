import './assets/main.css'
import Vue, { createApp } from '@vue/compat'
import { createPinia } from 'pinia'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
