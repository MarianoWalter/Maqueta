// CSS de Bootstrap 3
import 'bootstrap3/dist/css/bootstrap.min.css';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
