<template>
    <div class="action">
        <!-- <button @click="getDuanzi">点击获取段子</button> -->
        <el-row>
            <el-button round @click="video">视频</el-button>
            <el-button round @click="text">文字</el-button>
            <el-button round @click="image">图片</el-button>
        </el-row>
        <ol v-if="is.isVideo">
            <li v-for="(item,index) in duanzi" :key="index">
                <h2>{{item.text}}</h2>
                <video width="500px" height="300px" :src="item.video" :poster="item.header" controls></video>
            </li>
            <pagination :action="setDz" />
        </ol>
        <ol v-else-if="is.isText">
            <li v-for="(item,index) in duanziText" :key="index">
                <p>{{item.text}}</p>
            </li>
            <pagination :action="setDzTxt" />
        </ol>
        <ol v-else-if="is.isImg">
            <li v-for="(item,index) in duanziImg" :key="index">
                <p>{{item.text}}</p>
                <img class="img" :src="item.images" :alt="item.top_comments_content">
            </li>
            <pagination :action="setDzImage" />
        </ol>
        
    </div>
</template>

<script>
import { getlbt } from '@/api/data';
import { mapState,mapActions } from 'vuex';
import pagination from '@/components/pagination'

export default {
    name: 'action',
    data() {
        return {
            is:{
                isVideo: false,
                isText: false,
                isImg: false,
            },
            pageNo: 1,
            pageSize: 10,
        }
    },
    components:{pagination},
    // 测试axios封装
    // async mounted() {
    //     let res = await getlbt()
    //     console.log(res.msg)
    // },
    mounted() {
        this.setDz(this.pageNo,this.pageSize)
        this.setDzTxt(this.pageNo,this.pageSize)
        this.setDzImage(this.pageNo,this.pageSize)
    },
    methods: {
       video: function(){
           this.setDz(this.pageNo,this.pageSize)
           this.isVisible('video')
       },
       text:function(){
           this.setDzTxt(this.pageNo,this.pageSize)
           this.isVisible('text')
       },
       image:function(){
           this.setDzImage(this.pageNo,this.pageSize)
           this.isVisible('image')
       },
       setDz:function(pageNo = 1,pageSize = this.pageSize){
           let httpUrl = `https://api.apiopen.top/getJoke?page=${pageNo}&count=${pageSize}&type=video`
            this.dispatchActions('setDz',pageNo,pageSize,httpUrl)
       },
       setDzTxt:function(pageNo = 1,pageSize = this.pageSize){
           let httpUrl = `https://api.apiopen.top/getJoke?page=${pageNo}&count=${pageSize}&type=text`
            this.dispatchActions('setDzTxt',pageNo,pageSize,httpUrl)
       },
       setDzImage:function(pageNo = 1,pageSize = this.pageSize){
            let httpUrl = `https://api.apiopen.top/getJoke?page=${pageNo}&count=${pageSize}&type=image`
            this.dispatchActions('setDzImage',pageNo,pageSize,httpUrl)
       },
       dispatchActions:function(fn_name,pageNo,pageSize,httpUrl){
            this.pageNo = pageNo
            this.pageSize = pageSize
            fetch(httpUrl).then(res => res.json()).then(res => {
                let data = res.result
                if (res.code === 200) {
                    this.$store.dispatch(fn_name,data)
                } else {
                    console.log(message)
                }
            })
       },
       isVisible:function(type){
            switch (type){
                case 'image':
                    this.is.isVideo = false;
                    this.is.isText = false;
                    this.is.isImg = true;
                    break;
                case 'text':
                    this.is.isVideo = false;
                    this.is.isText = true
                    this.is.isImg = false
                    break;
                case 'video':
                    this.is.isVideo = true;
                    this.is.isText = false
                    this.is.isImg = false
                    break;
                default: break;
            }
            
       }
    },
    computed: {
        ...mapState({
            duanzi: 'duanzi',
            duanziText: 'duanzitext',
            duanziImg: 'duanziImage'
        }),
    },
}

</script>

<style>
    .img{
        width: 300px;
        height: auto;
    }
    ul{
        position: relative;
        height: 600px;
        overflow-y: scroll;
    }
    ul .block{
        height: 35px;
        position: fixed;
        left: 0;
        bottom: 0;
    }
    video{
        background: #000;
        outline: none;
    }
    .el-pager{
        height: 35px;
    }
</style>