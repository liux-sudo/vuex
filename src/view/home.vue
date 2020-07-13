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

        <h1>下面是自己练习写的过渡动画</h1>
        <el-row>
            <el-button round @click="add">add</el-button>
            <el-button round @click="remove">remove</el-button>
        </el-row>
        <transition-group name="list" tag="p">
            <span v-for="item in items" v-bind:key="item" class="list-item">
            {{ item }}
            </span>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            count: 0,
            items: [1,2,3,4,5,6,7,8,9],
            nextNum: 10
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
        },
        randomIndex: function () {
            return Math.floor(Math.random() * this.items.length)
        },
        add:function(){
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove:function(){
            this.items.splice(this.randomIndex(), 1)
        }
    },
}
</script>

<style scoped>
    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to
        /* .list-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
</style>