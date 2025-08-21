import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Primevue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App).mount('#app')

app.use(Primevue, {
    theme : {
        preset : Aura
    }
})