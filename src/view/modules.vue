<template>
    <div class="modules">
        <h2>{{buyCard.numjian}}</h2>
        <h2>{{changeNumMsg}}</h2>
        <button @click="changeNum">点击增加</button>
        <button @click="intrval">定时增加</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

export default {
    name: 'modules',
    computed: {
        ...mapState(['buyCard']),
        changeNumMsg:function(){
            return this.$store.getters['buyCard/changeNumMsg']
        }
    },
    methods: {
        changeNum:function(){
            this.$store.commit('buyCard/changeNum',2)
        },
        intrval:function(){
            var that = this
            var timer = setInterval(function(){
                that.$store.dispatch('buyCard/interval',3)
            },1000)
            setTimeout(function(){
                clearInterval(timer)
            },3000)
        }
    },
}
</script>