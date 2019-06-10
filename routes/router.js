import Vue from 'vue'
import VueRouter from 'vue-router'
import Swiper from "../src/components/swiper.vue"
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[{
        name:"home",
        path:'/',
        component:Swiper
    }]
})
export default router;