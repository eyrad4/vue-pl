import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from '../common/api.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    standings: null,
    teamSelected: null,
    allMatches: null,
    liveMatches: null
  },
  mutations: {
    setStandings(state, payload) {
      state.standings = payload
    },
    setTeamSelected(state, payload) {
      state.teamSelected = payload
    },
    setAllMatches(state, payload) {
      state.allMatches = payload
    },
    setLiveMatches(state, payload) {
      state.liveMatches = payload
    }
  },
  actions: {
    getStandings({ commit }) {
      return new Promise((resolve, reject) => {
        HTTP.get('competitions/PL/standings').then((response) => {
          commit('setStandings', response.data.standings[0].table)
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
      })  
    },
    teamSelected({ commit }, payload) {
      return new Promise((resolve, reject) => {
        HTTP.get('teams/' + payload).then((response) => {
          commit('setTeamSelected', response.data)
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    allMatches({ commit }) {
      return new Promise((resolve, reject) => {
        HTTP.get('competitions/PL/matches').then((response) => {
          commit('setAllMatches', response.data)
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
      })
    },
    liveMatches({ commit }) {
      return new Promise((resolve, reject) => {
        HTTP.get('matches?status=LIVE').then((response) => {
            commit('setLiveMatches', response.data)
            resolve(response)
        }).catch((error) => {
          reject(error)
        })
      })
    }
  },
  getters: {
    getStandings: state => {
      return state.standings;
    }
  }
})