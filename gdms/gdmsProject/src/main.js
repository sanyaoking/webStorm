// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import iView from 'iview'
// import Test from './gdms/test/test'
import Login from './gdms/login/login'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iView)

/* eslint-disable no-new */
// new Vue({
//   router,
//   template: '<Test/>',
//   components: { Test }
// })
new Vue({
  el: '#app',
  router,
  render: h => h(Login)
}).$mount('#app')
