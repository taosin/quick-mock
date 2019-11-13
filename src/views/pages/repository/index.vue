<template>
<div class="index">
    <div class="left">
        <Left />
    </div>
    <div class="main">
        <Main />
    </div>
</div>
</template>

<script>
import './index.scss'
import Left from './left'
import Main from './main'
export default {
    components: {
        Left,
        Main
    }
}
</script>
