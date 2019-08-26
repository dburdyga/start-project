import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import store from './store'
import './shared/interceptors/loading'
import 'bulma/css/bulma.css'
import 'buefy/dist/buefy.css'

Vue.use(Buefy);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

