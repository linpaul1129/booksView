import Vue from 'vue'
import VueRouter from 'vue-router'
import Books from '../views/Books.vue'
import BookDetail from '../views/BookDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: Books
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/books/:id/',
    name: 'book-detail',
    component: BookDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
