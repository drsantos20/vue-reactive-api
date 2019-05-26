import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({routes});

new Vue({
  router,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
