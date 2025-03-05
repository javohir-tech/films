import { createApp } from 'vue'
import App from './App.vue'
import UiComponents from './Ui-Components'
import './App.css'


const app = createApp(App)
UiComponents.map(component => app.component(component.name, component))


app.mount('#app')
