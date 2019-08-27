import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import store from './store'
import './interceptors/loading'
import 'bulma/css/bulma.css'
import 'buefy/dist/buefy.css'

Vue.use(Buefy);
Vue.config.productionTip = false
// Установка false отключает предупреждение о работе в режиме разработки при запуске Vue

new Vue({
  store,
  // хранилище добавлено к экземпляру
  render: h => h(App)
}).$mount('#app')

