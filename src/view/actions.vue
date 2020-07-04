<template>
    <div class="action">
        <button @click="getDuanzi">点击获取段子</button>
        <ul>
            <li v-for="(item,index) in duanzi" :key="index">
                <h2>{{item.text}}</h2>
                <video width="500px" height="300px" :src="item.video" :poster="item.header" controls></video>
            </li>
        </ul>
    </div>
</template>

<script>
import { getlbt } from '@/api/data';
import { mapState,mapActions } from 'vuex';

export default {
    name: 'action',
    // 测试axios封装
    // async mounted() {
    //     let res = await getlbt()
    //     console.log(res.msg)
    // },
    
    methods: {
        // getDuanzi:function(){
        //     this.$store.dispatch('setDz')
        // },
       ...mapActions({
            getDuanzi: 'setDz'
       })
    },
    computed: {
        ...mapState({
            duanzi: 'duanzi'
        }),
    },
}

</script>