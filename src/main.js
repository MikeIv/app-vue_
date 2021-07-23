import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Plugins
import Vuelidate from 'vuelidate';
import VueCarousel from 'vue-carousel';

Vue.use(Vuelidate, VueCarousel);


import './scss/styles.scss'



Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
