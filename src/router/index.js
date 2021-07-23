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
    path: '/dev',
    name: 'Dev',
    component: () => import( '../views/Dev.vue')
  },
  {
    path: '/dev/:id',
    name: 'Card',
    component: () => import( '../views/Card.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import( '../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',  // Убираем хэш
  routes
})

export default router
