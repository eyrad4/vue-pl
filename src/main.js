import Vue from 'vue'
import App from './App.vue'

import store from './store'

import router from './router'
import Loading from './components/loading/Loading'

Vue.config.productionTip = false
Vue.component('app-loading', Loading)

require ("./assets/main.scss")

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
