import Vue from 'vue'
import App from './App.vue'

import store from './store'

import router from './router'
import Loading from './components/loading/Loading'
import Tabs from './components/tabs/Tabs'
import Tab from './components/tabs/Tab'

Vue.config.productionTip = false
Vue.component('app-loading', Loading)
Vue.component('app-tabs', Tabs)
Vue.component('app-tab', Tab)

require ("./assets/main.scss")

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
