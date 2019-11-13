<template>
<div class="main-index">
    <div class="top-info">
        <div class="left-info size-14px color-999">
            <ul>
                <li class="size-16 color-333">{{obj.title}}</li>
                <li>地址：{{obj.title}}</li>
                <li>类型：{{obj.title}}</li>
                <li>状态码：{{obj.title}}</li>
            </ul>
        </div>
        <div class="right-part">
            <el-button type="default">修改</el-button>
            <el-button type="primary">保存</el-button>
        </div>
    </div>
    <div class="request-part" v-for="m in 1" :key="m">
        <div class="title size-16">
            <span>请求参数</span>
        </div>
        <div class="table-part">
            <Editor />
        </div>
    </div>
    <div class="response-part">
    </div>
</div>
</template>

<script>
export default {
    components: {
        Editor: () => import('./editor')
    },
    data() {
        return {
            status: 'QUERY',
            obj: {
                title: '审批提现申请(manager)',
                method: 'POST',
                code: '200',
                path: '/v1/accounts/withdrawal-applications/{applicationId}',
                desc: ''
            },
            tableData1: [{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 2,
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                id: 3,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                hasChildren: true
            }, {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {}
}
</script>

<style>

</style>
