import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Add jQuery
window.jQuery = window.$ = require("jquery");
//Add bootstrap
require("../node_modules/bootstrap/dist/js/bootstrap.min.js");
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
