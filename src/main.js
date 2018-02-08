// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import BootstrapVue from "bootstrap-vue"
import { Card, Navbar, FormInput, Dropdown } from 'bootstrap-vue/es/components';
import VueResource from 'vue-resource'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"


Vue.use(VueResource)
//Vue.use(BootstrapVue)
Vue.use(Card)
Vue.use(Navbar)
Vue.use(FormInput)
Vue.use(Dropdown)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
