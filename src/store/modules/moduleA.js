export default {
    namespaced: true,
    state: {
        show: false,
        count: 100,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
            { id: 3, text: '...', done: true }
        ]
    },
    getters: {
        doneTodos: (state) => {
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state,getters,rootState) => (id) => {
            console.log(rootState);
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {
        // 提交载荷（Payload）
        // 你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
        increment (state,n) {
            // 变更状态
            state.count += n;
        },
        // 当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 保持不变：
        increment_ (state,payload){
            state.count += payload.data;
        }
    },
    actions: {
        actionA ({ commit }) {
            commit('increment', 12);
        },
        async actionB ({ dispatch, commit }) {
            await dispatch('actionA'); // 等待 actionA 完成
            commit('increment', 5);
        }
    }
}
