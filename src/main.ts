import Vue from 'vue';
import App from './app.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import store from '@/store/store';

library.add(faPlus);

// Require the main Sass manifest file
require('./assets/sass/main.scss');

Vue.component('fa-icon', FontAwesomeIcon);
Vue.config.productionTip = false;


new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');

