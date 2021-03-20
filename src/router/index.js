import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cat from '../views/Cat.vue'
import Dog from '../views/Dog.vue'
import Pet from '../views/Pet.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pet',
    name: 'Pet',
    component: Pet
  },
  {
    path: '/cat',
    name: 'Cat',
    component: Cat
  },
  {
    path: '/dog',
    name: 'Dog',
    component: Dog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
