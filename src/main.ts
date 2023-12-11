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

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
app.config.globalProperties.$filters = filters;
