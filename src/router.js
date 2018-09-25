import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Planet from '@/components/Planet'
import Ship from '@/components/Ship'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/planet',
      name: 'Planet',
      component: Planet
    },
    {
      path: '/ship',
      name: 'Ship',
      component: Ship
    }
  ]
})