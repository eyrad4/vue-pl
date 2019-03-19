import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import detailTeam from '@/views/team/detailTeam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/team:id',
      name: 'detailTeam',
      component: detailTeam
    }
  ]
})