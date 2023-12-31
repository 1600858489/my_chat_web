import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/HomePage')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/LoginPage')
  },
  {
    path: "/register",
    name: "Register",
    component: () => import('../views/RegisterPage')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/NotFound') 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
