import Vue from 'vue'
import Router from 'vue-router'
import Forex from './views/Forex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Forex',
      component: Forex
    }
  ]
})
