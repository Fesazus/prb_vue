import { createApp } from 'vue'
import App from './App.vue'
import mainApp from './components/mainApp.vue'
import impressumWebsite from './components/impressumWebsite'
import datenschutzWebsite from './components/datenschutzWebsite'
//import recipyList from './components/recipyList'
import { createRouter, createWebHistory } from "vue-router"


const app = createApp(App)

const routes = [
    { path: "/", name: "Home", component: mainApp },
    { path: "/impressumWebsite", name: "Impressum", component: impressumWebsite },
    { path: "/datenschutzWebsite", name: "Datenschutz", component: datenschutzWebsite },
    { path: "/", name: "Suche", component: mainApp, props: route => ({ query: route.query.id }) },
    { path: "/", name: "choice", component: mainApp, props: route => ({ query: route.query.id }) },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: "active"
})

// createApp(App).mount('#app')
// app.use(router)
app.use(router).mount('#app')

