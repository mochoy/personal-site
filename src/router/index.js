import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
