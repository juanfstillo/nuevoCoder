import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('./pages/Login'),
            props: true
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./pages/Register'),
            props: true
        },
        {
            path: '/',
            name: 'main',
            component: () => import('./pages/Main'),
            props: true
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./pages/Admin'),
            props: true
        },
        {
            path: '/admin/:id',
            name: 'editar',
            component: () => import('./pages/Edit'),
            props: true
        },
        // {
        //     path: '/usuarios/:valor?',
        //     name: 'usuarios',
        //     component: () => import('./pages/Usuarios')
        // },
        {
            path:"/about",
            name: "about",
            component:()=> import("../src/pages/About")
        },
        {
            path:"/carrito/:id",
            name: "carrito",
            component:()=> import("../src/pages/Carrito")
        },
        {
            path:"/detalle/:id",
            name: "detalle",
            component:()=> import("../src/pages/Detalle")
        },

    ]
})