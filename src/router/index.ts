import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: () => import("../views/Login.vue")
        },
        {
            path: '/index',
            component: () => import("../views/Index.vue"),
            children: [
                {
                    path: '/application',
                    component: () => import("../views/Application.vue")
                },
            ]
        },
    ]
})

export default router