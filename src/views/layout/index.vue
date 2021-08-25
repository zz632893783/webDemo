<template>
    <div class="page-container">
        <span class="logo" v-on:click="jumpHome"></span>
        <nav-btn></nav-btn>
        <router-view/>
    </div>
</template>
<script>
import navBtn from './navBtn'
export default {
    components: {
        navBtn
    },
    data: function () {
        return {}
    },
    methods: {
        jumpHome: function () {
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.page-container {
    height: 100%;
    .nav-btn {
        z-index: 10;
    }
    .logo {
        border: 1px solid red;
        position: absolute;
        top: vh(67 + 12);
        left: vw(150);
        width: vw(88);
        height: vh(54 + 12);
        border: 1px solid red;
        z-index: 10;
        cursor: pointer;
    }
}
</style>
