import { createWebHistory, createRouter } from "vue-router"
import LandingPage from "@/views/LandingPage.vue"

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage,
    },
]

const index = createRouter({
    history: createWebHistory(),
    routes
})

export default index