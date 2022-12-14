import {createRouter, createWebHashHistory} from "vue-router";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/application',
            component: () => import("../views/Application.vue")
        },
        {
            path: '/login',
            component: () => import("../views/Login.vue")
        }
    ]
})

export default router