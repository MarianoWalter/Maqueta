// Bootstrap 3 CSS
import 'bootstrap3/dist/css/bootstrap.min.css';

// Bootstrap JS
import 'bootstrap3/js/carousel';
import 'bootstrap3/js/collapse';
import 'bootstrap3/js/dropdown';

import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount('#app');
