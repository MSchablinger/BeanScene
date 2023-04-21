import { createWebHistory, createRouter } from "vue-router"
import LandingPage from "@/views/LandingPage.vue"
import ShopPage from "@/views/ShopPage.vue"
import ProductDetail from "@/views/ProductDetail.vue";

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
        path: "/detail",
        name: "ProductDetail",
        props: {
            id: route => ({query: route.query.id})
        },
        component: ProductDetail
    }
]

const index = createRouter({
    history: createWebHistory(),
    routes
})

export default index