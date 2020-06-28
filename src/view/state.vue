<template>
    <div class="state">
        <ul>
            <li>姓名：{{name}}</li>
            <li>年龄：{{age}}</li>
            <li>数字：{{num}}</li>
            <li>greenMsg: {{greenMsg}}</li>
            <li>reverse: {{reverse}}</li>
        </ul>
        <!-- <input type="text" v-model="num"> -->
        <!-- <input type="text" :value='num' @input="changeNum"> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name:'state',
    data() {
        return {
            green: '真帅,哈哈哈'
        }
    },
    // computed: {
    //     name:function(){
    //         return this.$store.state.name
    //     },
    //     age:function(){
    //         return this.$store.state.age
    //     },
    //     num:{
    //         get:function(){
    //             return this.$store.state.num
    //         },
    //         set:function(val){
    //             this.$store.commit('setNum',val)
    //         }
    //     }
    // },


    // 第一种映射方式
    // computed: mapState(['age','name','num']),
    // methods: {
    //     changeNum:function(e){
    //         return this.$store.commit('setNum',e.target.value)
    //     }
    // },


    // 第二种映射方式
    // computed: mapState({
    //     name: 'name',
    //     age: (state) => state.age,
    //     num: "num",
    //     greenMsg: function(state) {
    //         return state.name + this.green
    //     }
    // })

    // 第三种映射方式

    computed: {
        reverse: function(){
            return this.green.split('').reverse().join('')
        },
        ...mapState({
            name: 'name',
            age: (state) => state.age,
            num: "num",
            greenMsg: function(state) {
                return state.name + this.green
            }
        })
    },
}
</script>