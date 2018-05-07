<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{count}}</h1>
        <router-view/>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex'

    export default {
        name: 'App',
        computed: {
            ...mapState('moduleA',['show','count']),
            ...mapGetters('moduleA',['doneTodos', 'getTodoById'])
        },
        methods: {
            ...mapMutations('moduleA',['increment', 'increment_']),
            ...mapActions('moduleA',['actionA', 'actionB'])
        },
        mounted() {
            console.log(this);
            // 你不能直接调用一个 mutation handler。
            // 这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。
            // ”要唤醒一个 mutation handler，你需要以相应的 type 调用 store.commit 方法
            // 你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
            this.increment(10);
            // 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
            this.increment_({data: 30});
            //this.actionA().then(() => {console.log(this.count);});
            this.actionB().then(() => {console.log(this.count);});
            console.log(this.show);
            console.log(this.count);
            console.log(this.doneTodos);
            console.log(this.getTodoById(2));
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
