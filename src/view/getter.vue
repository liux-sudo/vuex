<template>
    <div class="getter">
        <h2>{{gettersMsg}}</h2>
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
        <h2>mapGetters之数组形式{{mapGetters}}</h2>
        <h2>mapGetters之对象形式{{liuxu}}</h2>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'getter',
     computed: {
         gettersMsg:function(){
             return this.$store.getters.getterMsg
         },
         ...mapState(['name','age']),
        
         // 辅助函数mapGetters，可以数组形式，可以对象形式
         ...mapGetters(['mapGetters']),
         ...mapGetters({
             liuxu: 'mapGetters',
         })
     },
    
    // computed: mapGetters(['mapGetters']),
   
}
</script>