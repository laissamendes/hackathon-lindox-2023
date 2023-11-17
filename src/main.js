// import 'vue-loading-overlay/dist/css/index.css';
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './lib/supabaseClient'
import { createPinia } from 'pinia';

const app = createApp(App)

app.use(router)
// app.mount('#app')
app.use(createPinia());
app.mount('#app');