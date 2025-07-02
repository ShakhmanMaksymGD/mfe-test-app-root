import './assets/main.css'
import { registerSpas } from './single-spa.setup';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
})

app.use(router)
app.use(vuetify)
app.use(pinia)
registerSpas();

app.mount('#app')

