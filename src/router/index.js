import { createRouter , createWebHashHistory } from 'vue-router'

const routes = [
    {
        path:"/",
        name:"Home",
        component:() => import('../views/HomePage')
    },
    {
        path: "/about",
        name: 'About',
        component:() => import('../views/AboutPage')
    },
    {
        path: "/login",
        name: "Login",
        component:() => import('../views/LoginPage')
    },
    {
        path: '/register',
        name: "Register",
        component:() => import('../views/RegisterPage')
    },
    {
      path: '/chat',
      name: "Chat",
      component:() => import('../views/ChatPage')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router