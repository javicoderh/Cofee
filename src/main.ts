import { createApp } from 'vue'
import '@fontsource/fraunces/latin-500.css'
import '@fontsource/fraunces/latin-600.css'
import '@fontsource/fraunces/latin-500-italic.css'
import App from './app/App.vue'
import { router } from './app/router'
import { installProviders } from './app/providers'
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/details.css'
import './styles/motion.css'
const app = createApp(App)
installProviders(app)
app.use(router).mount('#app')
