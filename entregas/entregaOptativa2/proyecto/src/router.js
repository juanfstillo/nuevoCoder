import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'register',
            component: () => import('./pages/Register'),
            props: true
        },
        {
            path: '/usuarios',
            name: 'usuarios',
            component: () => import('./pages/Usuarios'),
            props: true
        },

    ]
})