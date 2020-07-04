<template>
    <div class="block">
        <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-sizes="[5, 10, 20, 40]"
        layout="sizes, prev, pager, next"
        :pager-count="5"
        :total="200">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'block',
    props:['action'],
    data() {
        return {
            currentPage1: 1,
            pageNo:1,
            pageSize: 5
        }
    },

    methods: {
        handleSizeChange:function(val){
            this.pageSize = val
            this.action(this.pageNo,this.pageSize)
        },
        handleCurrentChange:function(num){
           this.pageNo = num
           this.action(this.pageNo,this.pageSize)
        },
    },
    
}
</script>