<template>
<div class="left-index">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>接口列表</span>
            <el-button style="float: right; padding: 3px 0" type="text">新增接口</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            <p class="size-14 name">
                {{'列表内容 ' + o }}
            </p>
			<p class="size-10 path color-999">
				/v1/accounts/{ouid}/{guid}/withdrawal-applications
			</p>
        </div>
    </el-card>
</div>
</template>

<script>
export default {

}
</script>
