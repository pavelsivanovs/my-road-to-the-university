import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SectionPage from '../views/SectionPage.vue'
import HomeEng from '../views/HomeEng.vue'
import SectionPageEng from '../views/SectionPageEng.vue'

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
    },
    {
        path: '/en',
        name: 'HomeEng',
        component: HomeEng
    },
    {
        path: '/en/section/:key',
        name: 'SectionEng',
        component: SectionPageEng
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router