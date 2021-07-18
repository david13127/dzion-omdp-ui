import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import installElementPlus from './plugins/element'
import 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const app = createApp(App)
app.use(store).use(router).mount('#app')
installElementPlus(app)
app.config.globalProperties.$axios = axios
