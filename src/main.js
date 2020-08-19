import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/animate.css'

Vue.config.productionTip = false
import Vuelidate from "vuelidate";
import formatDateFilter from './filters/formatDateFilter';

import logOnCreatedMixin from './mixins/logOnCreatedMixin';

Vue.mixin(logOnCreatedMixin);

Vue.filter('formatDate', formatDateFilter);

import Vue2Filters from 'vue2-filters'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.use(Vue2Filters);
Vue.use(Vuelidate);

// JavaScript runtime error 
window.onerror = function(msg, src, linenum, colnum, error) {
  console.error('[JavaScript Error Handler]: ' + msg + '- ' + error);
  router.push({ name: 'error'});
}

// Vue related errors
Vue.config.errorHandler = function (err, vm, info) {
  console.error('[Vue Error Handler]: Error in ' + info + ': ' + err);
  router.push({ name: 'error'});
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
