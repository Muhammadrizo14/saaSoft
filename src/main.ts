import { createApp } from 'vue'
import './assets/styles/main.scss'
import App from './App.vue'
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'





createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: 'light',
      }
    }
  })
  .mount('#app')
