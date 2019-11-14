<template>
<div class="list">
    <el-row :gutter="40">
        <el-col v-for="n in 10" :key="n" span="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>项目{{n}}</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
            </el-card>
        </el-col>
    </el-row>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.el-col{
	margin-bottom: 40px;
}
</style>
