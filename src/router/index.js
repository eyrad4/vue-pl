import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import DetailTeam from '@/views/team/DetailTeam'
import MatchesList from '@/views/matches/MatchesList'
import LiveMatchesList from '@/views/matches/LiveMatchesList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/team/:id',
      name: 'DetailTeam',
      component: DetailTeam
    },
    {
      path: '/matches',
      name: 'MatchesList',
      component: MatchesList
    },
    {
      path: '/live',
      name: 'LiveMatchesList',
      component: LiveMatchesList
    }
  ]
})