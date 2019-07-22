import Vue from 'vue'
import Router from 'vue-router'
import SignIn from './views/SignIn.vue'
import Dashboard from './views/Dashboard.vue'
import Addvisitors from './views/Addvisitors.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      //component: Home
      component: SignIn
    },
    {
      path: '/dash',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/addvisitors',
      name: 'Addvisitors',
      component: Addvisitors
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
