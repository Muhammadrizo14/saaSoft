import { createApp } from "vue";

import App from "./App.vue";

import Aura from "@primevue/themes/aura";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

import "./assets/styles/main.scss"; // все кастомные стили тут

import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: "light",
      },
    },
  })
  .use(pinia)
  .mount("#app");
