import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Profile from '../views/Profile.vue'
import Social from '../views/Social.vue'
import Discography from '../views/Discography.vue'
import Filmography from '../views/Filmography.vue'
import Tour from '../views/Tour.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/social',
        name: 'SocialMedia',
        component: Social
    },
    {
        path: '/discography',
        name: 'Discography',
        component: Discography
    },
    {
        path: '/filmography',
        name: 'Filmography',
        component: Filmography
    },
    {
        path: '/tour',
        name: 'Tour',
        component: Tour
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        window.scrollTo(0, 0);
    }
})

export default router
