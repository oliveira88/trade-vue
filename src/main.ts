/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import filters from './helpers/filters'
import {VueFire, VueFireDatabaseOptionsAPI, VueFireFirestoreOptionsAPI} from "vuefire";
import { firebaseApp } from "@/firebase";
import { store, storeKey } from './store'
const app = createApp(App)

registerPlugins(app)
app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireDatabaseOptionsAPI(),
    VueFireFirestoreOptionsAPI(),
  ],
})
app.use(store, storeKey)
app.mount('#app')
app.config.globalProperties.$filters = filters;
