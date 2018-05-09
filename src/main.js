// 作者：小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入store
import store from './store'
// 按需引入element-ui
import { Button } from 'element-ui';
Vue.use(Button);
// 自定义scroll指令
Vue.directive('scroll', {
    // 当组件完成一次更新时调用 还有其它的钩子函数 自行选择合适的
    componentUpdated:  (el) => {el.scrollTop = 0;}
});

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
