import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(VueAxios, axios)
Vue.use(Vuetify)
 



// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
