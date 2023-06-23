import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import router from './router'

import "./assets/css/index.scss"

// import "bootstrap/dist/css/bootstrap.css"
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"

const app = createApp(App)

app.use(bootstrap)
app.use(router)
app.use(store)
app.use(VueSidebarMenu)

app.mount('#app')
