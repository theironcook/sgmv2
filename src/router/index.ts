import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import GettingStarted from '../views/GettingStarted.vue'
import Pricing from '../views/Pricing.vue'
import ContactUs from '../views/ContactUs.vue'
import Docs from '../views/Docs.vue'
import Community from '../views/Community.vue'

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
  {
    path: '/Docs',
    name: 'Docs',
    component: Docs
  },
  {
    path: '/Community',
    name: 'Community',
    component: Community
  }
]

const router = new VueRouter({
  routes
})

export default router
