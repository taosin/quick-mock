<template>
<div>
    <el-form v-if="editting" label-width="60px">
        <el-form-item label="名称:">
            <el-input class="width-300" v-model="info.name"></el-input>
        </el-form-item>
        <el-form-item label="地址:">
            <el-input class="width-300" v-model="info.path"></el-input>
        </el-form-item>
        <el-form-item label="类型:">
            <el-select v-model="info.method" class="width-300">
                <el-option v-for="item in methodList" :value="item" :key="item" :label="item"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="状态码:">
            <el-input class="width-300" v-model="info.code"></el-input>
        </el-form-item>
        <el-form-item label="描述:">
            <el-input class="width-300" type="textarea" v-model="info.desc"></el-input>
        </el-form-item>
    </el-form>
    <ul v-else>
        <li class="size-16 color-333">{{info.name}}</li>
        <li>地址：{{info.path}}</li>
        <li>类型：{{info.method}}</li>
        <li>状态码：{{info.code}}</li>
    </ul>
</div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            default: () => {}
        },
        editting: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            info: this.value,
            methodList: ['POST', 'GET', 'DELETE', 'PUT', 'PATCH']
        }
    }
}
</script>

<style>

</style>
