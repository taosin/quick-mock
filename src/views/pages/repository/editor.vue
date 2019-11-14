<template>
<div>
    <el-table :data="tableData" size="small" ref="sortTable" stripe :indent="30" style="width: 100%" row-key="id" border default-expand-all>
        <el-table-column label="操作" width="60" align="center">
            <!-- <el-button type="primary" icon="el-icon-plus" circle></el-button> -->
            <!-- <Editor v-if="scope.row.children"/> -->
            <!-- <template slot-scope="scope">
</template> -->
        </el-table-column>
        <el-table-column prop="name" label="字段名" width="100">
            <template slot-scope="scope">
                <div class="a" :style="{paddingLeft:scope.row.children ?'':'10px'}">
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
                children: [{
                    id: 1 - 1,
                    name: '名称321',
                    required: true,
                    init: '312312',
                    type: 'Object',
                    desc: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: 1 - 2,
                    name: '名称312',
                    required: true,
                    init: '312312',
                    type: 'Object',
                    desc: '上海市普陀区金沙江路 1518 弄',
                }]
            }, {
                id: 2,
                name: '类型',
                required: true,
                init: '312312',
                type: 'Number',
                desc: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 3,
                name: '用户类型',
                required: true,
                init: '312312',
                type: 'Array',
                desc: '上海市普陀区金沙江路 1518 弄'
            }, {
                id: 4,
                name: '打款金额',
                required: true,
                init: '312312',
                type: 'Boolean',
                desc: '上海市普陀区金沙江路 1518 弄'
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
