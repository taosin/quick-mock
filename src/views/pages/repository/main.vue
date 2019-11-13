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
    <div class="request-part">
        <div class="title size-16">
            <span>请求参数</span>
        </div>
        <div class="table-part">
            <el-table :data="tableData1" stripe style="width: 100%" row-key="id" border lazy :load="load" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                <el-table-column prop="date" label="" width="180">
                </el-table-column>
                <el-table-column prop="name" label="必选" width="180">
                </el-table-column>
                <el-table-column prop="address" label="类型">
                </el-table-column>
                <el-table-column prop="address" label="初始值">
                </el-table-column>
                <el-table-column prop="address" label="简介">
                </el-table-column>
            </el-table>
        </div>
    </div>
    <div class="response-part">

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
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
    methods: {
        load(tree, treeNode, resolve) {
            setTimeout(() => {
                resolve([{
                    id: 31,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    id: 32,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }])
            }, 1000)
        }
    }
}
</script>

<style>

</style>
