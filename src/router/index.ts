import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import GettingStarted from '../views/GettingStarted.vue'
import Pricing from '../views/Pricing.vue'
import ContactUs from '../views/ContactUs.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/GettingStarted',
    name: 'GettingStarted',
    component: GettingStarted
  },
  {
    path: '/Pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
