import Vue from 'vue'
import Router from 'vue-router'
import Standings from '@/views/Standings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Standings',
      component: Standings
    }
  ]
})