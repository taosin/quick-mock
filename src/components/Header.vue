<template>
<header>
    <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal">
        <el-menu-item index="/">首页</el-menu-item>
		<el-menu-item index="repository/list">项目</el-menu-item>
        <el-menu-item index="teams">团队</el-menu-item>
        <el-menu-item index="about"><a href="https://www.baidu.com" target="_blank">其他</a></el-menu-item>
    </el-menu>
</header>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 'repository',
        };
    },
    methods: {
    }
}
</script>

<style>

</style>
