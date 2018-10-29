// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css';

//require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
//require('../node_modules/font-awesome/css/font-awesome.min.css')
//require('../node_modules/simple-line-icons/css/simple-line-icons.css')
//require('../node_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css')

require('@/assets/css/base.css')
//require('@/assets/css/vendor.css')
require('@/assets/css/main.css')
require('@/assets/css/fonts.css')
//require('@/assets/css/utils.css')






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
