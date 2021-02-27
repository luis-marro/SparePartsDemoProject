import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/login/recoverPassword',
    name: 'RecoverPassword',
    component: () => import('../views/PasswordRecovery')
  },
  {
    path: '/createAccount',
    name: 'CreateAccount',
    component: () => import('../views/CreateAccount')
  },
  {
    path: '/createProduct',
    name: 'CreateProduct',
    component: () => import('../views/CreateNewPart')
  },
  {
    path: '/viewProducts',
    name: 'ViewProducts',
    component: () => import('../views/ViewProducts')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
