import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
