import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'admin',
    component: () => import('../views/AdminsAccounts/admins.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/loginPage/login.vue")
  },
  {
    path: '/ali',
    name: 'ali',
    component: () => import("../views/AliView.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})




export default router
