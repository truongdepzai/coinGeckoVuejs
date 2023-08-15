
import detailsPage from '../components/details/details.vue'
import Main from '../components/Main/Main.vue'
import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/detailsPage/:id', component: detailsPage},
        {path: '/', component: Main}
    ]
})

export default router;
