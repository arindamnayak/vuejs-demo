// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import BootstrapVue from "bootstrap-vue"
import { Card, Navbar, FormInput, Dropdown, Collapse, Button } from 'bootstrap-vue/es/components';
import vBToggle from 'bootstrap-vue/es/directives/toggle/toggle';
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
Vue.use(Collapse)
Vue.use(Button)
Vue.config.productionTip = false
Vue.directive('b-toggle', vBToggle);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
