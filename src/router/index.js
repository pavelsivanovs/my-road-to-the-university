import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SectionPage from '../views/SectionPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/section/:key',
        name: 'Section',
        component: SectionPage 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router