import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'

const Dashboard = () => import('../views/Dashboard/index.vue')
const Home = () => import('../views/Home/index.vue')
const Login = () => import('../views/Login/index.vue')

const isAuthenticated = store.getters.isAuthenticated

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    if (isAuthenticated && to.meta.requiresAuth === false) {
      next({ path: '/' })
    } else {
      next()
    }
  }
})

export default router
