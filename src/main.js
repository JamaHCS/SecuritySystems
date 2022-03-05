import Vue from 'vue';
import App from './App.vue';
import router from './router/router';

import VueHighlightJS from 'vue-highlight.js';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';

// https://github.com/gluons/vue-highlight.js/
import './plugins/highlight/stackoverflow-light.min.css';
import './plugins/font-awesome';

import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
Vue.component(VueCropper);

import 'popper.js';
import 'bootstrap';
import './../node_modules/metismenu/dist/metisMenu';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// import './../dist/css/style1.css';
import './scss/cooper.scss';

Vue.use(VueHighlightJS, {
    languages: {
        xml,
        javascript
    }
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
