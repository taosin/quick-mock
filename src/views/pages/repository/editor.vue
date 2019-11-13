<template>
<div>
    <el-table :data="tableData" stripe style="width: 100%" row-key="id" border lazy :load="load" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
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
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
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
