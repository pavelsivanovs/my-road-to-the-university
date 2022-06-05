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
    history: createWebHistory(process.env.NODE_ENV === 'production' ? '/my-road-to-the-university/' : '/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.name.includes("Section")) {
            return {
                top: 0,
                behavior: 'smooth'
            }
        } 
        
        if (from.name.includes("Section")) {
            return {
                el: '#main',
                top: 0,
                behavior: 'smooth'
            }
        }
    }
})

export default router