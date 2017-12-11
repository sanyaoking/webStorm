import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/gdms/test/test'
import Login from '@/gdms/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'this is test!',
      component: Test
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
