import { createApp } from "vue"
import App from "./App.vue"
import store from "./vuex/store"
import router from "./router"

import "./assets/css/index.scss"

import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js"

const app = createApp(App)

app.use(bootstrap)
app.use(router)
app.use(store)

app.mount("#app")
