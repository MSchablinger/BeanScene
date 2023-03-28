import { createWebHistory, createRouter } from "vue-router"
import LandingPage from "@/views/LandingPage.vue"
import ShopPage from "@/views/ShopPage.vue"

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage,
    },
    {
        path: "/shop",
        name: "Shop",
        component: ShopPage
    },
    {
        path: "/shop/:id",
        name: "ShopItem",
    }
]

const index = createRouter({
    history: createWebHistory(),
    routes
})

export default index