<template>
<div class="list">
    <el-row :gutter="40">
        <el-col v-for="n in 10" :key="n" span="8">
            <el-card class="box-card" shadow="hover">
                <div slot="header" class="clearfix">
					<el-button type="text" @click="goto">项目{{n}}</el-button>
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
	methods:{
		goto(){
			this.$router.push({
				path: '/repository'
			})
		}
	}
}
</script>

<style scoped>
.el-col {
    margin-bottom: 40px;
}
</style>
