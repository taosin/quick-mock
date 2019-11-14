<template>
<div class="main-index">
    <div class="top-info">
        <div class="left-info size-14px color-999">
            <Info :value="obj" :editting="editting"/>
        </div>
        <div class="right-part">
            <el-button type="default" @click="editting=!editting">{{editting?'保存':'修改'}}</el-button>
        </div>
    </div>
	<div class="line"></div>
    <div class="request-part" v-for="m in 1" :key="m">
        <div class="title size-16">
            <span>请求参数</span>
        </div>
        <div class="table-part">
            <Editor />
        </div>
    </div>
	<div class="line"></div>
    <div class="response-part">
		<div class="title size-16">
            <span>响应参数</span>
        </div>
        <div class="table-part">
            <Editor />
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {
        Editor: () => import('./editor'),
        Info: () => import('./info'),
    },
    data() {
        return {
            status: 'QUERY',
			editting: false,
            obj: {
                name: '审批提现申请(manager)',
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
