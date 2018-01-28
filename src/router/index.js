import Vue from 'vue'
import Router from 'vue-router'
import benchmark from '@/components/benchmark'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'benchmark',
      component: benchmark
    }
  ]
})
