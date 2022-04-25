import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    { path: "/", App: App },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: "active"
})

// createApp(App).mount('#app')
// app.use(router)
createApp(App).use(router).mount('#app')
