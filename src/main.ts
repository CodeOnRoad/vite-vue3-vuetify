import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createPinia } from 'pinia'
import App from './App.vue'
import createVuetify from './plugins/vuetify'

import 'vuetify/styles'
import './styles/main.css'

const routes = setupLayouts(generatedRoutes)
const pinia = createPinia()

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.use(pinia)
app.use(createVuetify)
app.mount('#app')
