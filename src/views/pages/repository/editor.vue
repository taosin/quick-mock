<template>
<div>
    <el-table :data="tableData" size="small" ref="sortTable" stripe :indent="30" style="width: 100%" row-key="id" border default-expand-all>
        <el-table-column label="操作" width="60" align="center">
        </el-table-column>
        <el-table-column prop="name" label="字段名">
            <template slot-scope="scope">
                <div class="a" :style="{marginLeft:(scope.row.level-1)*15+'px'}">
                    {{scope.row.name}}
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="required" label="必选" width="60">
        </el-table-column>
        <el-table-column prop="type" label="类型" width="100">
        </el-table-column>
        <el-table-column prop="init" label="初始值" width="100">
        </el-table-column>
        <el-table-column prop="desc" label="描述">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
    name: 'Editor',
    data() {
        return {
            current: 1,
            tableData: [{
                id: 1,
                name: '名称',
                required: true,
                init: '312312',
                type: 'Object',
                desc: '上海市普陀区金沙江路 1518 弄',
                level: 1,
                children: [{
                    level: 2,
                    id: 1 - 1,
                    name: '名称32',
                    required: true,
                    init: '312312',
                    type: 'Object',
                    desc: '上海市普陀区金沙江路 1518 弄',
                    children: [{
                        level: 3,
                        id: 1 - 1 - 1,
                        name: '名称32eqeqweqwe1',
                        required: true,
                        init: '312312',
                        type: 'Object',
                        desc: '上海市普陀区金沙江路 1518 弄',
                    }, {
                        level: 3,
                        id: 1 - 2 - 3,
                        name: '名称3蛐蛐儿二12',
                        required: true,
                        init: '312312',
                        type: 'Object',
                        desc: '上海市普陀区金沙江路 1518 弄',
                    }]
                }, {
                    level: 2,
                    id: 1 - 2,
                    name: '名称312',
                    required: true,
                    init: '312312',
                    type: 'Object',
                    desc: '上海市普陀区金沙江路 1518 弄',
                }]
            }, {
                id: 2,
                level: 1,
                name: '类型',
                required: true,
                init: '312312',
                type: 'Number',
                desc: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 3,
                level: 1,
                name: '用户类型',
                required: true,
                init: '312312',
                type: 'Array',
                desc: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 4,
                level: 1,
                name: '打款金额',
                required: true,
                init: '312312',
                type: 'Boolean',
                desc: '上海市普陀区金沙江路 1518 弄'
            }]
        }
    },
    mounted() {
        this.$refs.sortTabel.toggleRowExpansion()
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
