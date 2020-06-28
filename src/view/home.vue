<template>
    <div class="box">
        <h1>这是home页</h1>
        <h3>这是一个计数器：{{count}}</h3>
        <button @click="countAdd">加</button>
        <button @click="countJian">减</button>

        <!-- vuex方式 -->

        <h2>vuex方式</h2>
        <h3>这是一个计数器：{{$store.state.num}}</h3>
        <button @click="addNum">加</button>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        countAdd:function(){
            this.count++
        },

        countJian:function(){
            if(this.count <= 0){
                return false
            }else{
                this.count--
            }
        },
        addNum:function(){
            this.$store.commit('numAdd')
        }
    },
}
</script>

<style scoped>
    
</style>