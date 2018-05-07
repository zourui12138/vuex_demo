import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

export default new vuex.Store({
    state: {
        todos: [
            { id: 1, text: '全局', done: true },
            { id: 2, text: '全局', done: false },
            { id: 3, text: '全局', done: true }
        ]
    },
    modules: {
        moduleA: moduleA,
        moduleB: moduleB
    }
})
