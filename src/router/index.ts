import Vue from 'vue'
import VueRouter, { RouteConfig, Route } from 'vue-router'
import Home from '../views/Home.vue'
import GettingStarted from '../views/GettingStarted.vue'
import Pricing from '../views/Pricing.vue'
import ContactUs from '../views/ContactUs.vue'
import Docs from '../views/Docs.vue'
import Community from '../views/Community.vue'
import Workshop from '../views/Workshop.vue'

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
  },
  {
    path: '/workshop',
    name: 'workshop',
    component: Workshop
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach(async (to: Route, from: Route, next: (options?: any) => void) => { 
  var _hsq = (<any>window)._hsq = (<any>window)._hsq || [];
  _hsq.push(['setPath', to.path]);
  _hsq.push(['trackPageView']);

  next();
}); 

export default router
