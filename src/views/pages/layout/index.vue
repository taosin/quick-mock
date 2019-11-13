<template>
<div>
    <Header />
    <section class="section-breadcrumb">
        <Breadcrumb />
    </section>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
export default {
    name: 'layout',
    components: {
        Header,
        Breadcrumb
    }
}
</script>

<style>
</style>
