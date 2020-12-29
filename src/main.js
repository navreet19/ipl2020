import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import Home from './view/Home';
import About from './view/About';
import './scss/main.scss';
import 'ag-grid-enterprise';
Vue.config.productionTip = false
const router = new VueRouter({
  routes: [
    { path: '/', component: Home},
    { path: '/about', component: About},
  ]
})
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
