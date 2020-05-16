import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Portfolio from '@/components/Portfolio'
import ReadMore from 'vue-read-more';

Vue.use(ReadMore);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portafolio',
      name: 'Portfolio',
      component: Portfolio
    }
  ]
})
