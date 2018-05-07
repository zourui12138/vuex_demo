// 作者：小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入store
import store from './store'

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
