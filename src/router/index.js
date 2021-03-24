import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '../views/Books.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/books/:id/',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
