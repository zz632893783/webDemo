<template>
    <el-scrollbar class="academic-research">
        <!-- <div class="view" v-bind:style="`opacity: ${ opacity / 100 };`"></div>
        <div class="control">
            <el-slider v-model="opacity"></el-slider>
        </div> -->
        <!-- <span class="logo"></span> -->
        <!-- <div :class="['more-btn']">
            <i></i>
            <i></i>
            <i></i>
        </div> -->
        <nav-bar></nav-bar>
        <!-- <transition name="fade">
            <router-view />
        </transition> -->
        <router-view />
    </el-scrollbar>
</template>
<script>
import navBar from './navBar'
export default {
    components: {
        navBar
    },
    data: function () {
        return {
            opacity: 50
        }
    }
}
</script>
<style lang="stylus" scoped>
.academic-research {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        // height: vh(190);
        background-color: white;
        z-index: 1;
    }
    >>>.el-scrollbar__wrap {
        overflow-x: hidden;
    }
    .control {
        position: fixed;
        top: 0;
        right: 100px;
        width: 200px;
        height: 50px;
        line-height: 50px;
        z-index: 100;
    }
    .view {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border: 1px solid red;
        pointer-events: none;
        z-index: 100;
        &:before {
            content: '';
            position: absolute;
            width: 1920px;
            height: 1080px;
            background-size: 100% 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // background-image: url('~@/assets/image/06国际论坛.png');
            // background-image: url('~@/assets/image/06国际论坛-aii人工智能国际论坛.png');
            height: 1280px;
            top: 0;
            left: 0;
            transform: translate(0%, 0%);
        }
    }
    .logo {
        border: 1px solid red;
        position: absolute;
        top: vh(67);
        left: vw(150);
        width: vw(88);
        height: vh(54);
        border: 1px solid red;
    }
    .more-btn {
        width: vw(48);
        height: vh(28);
        margin-top: vh(80);
        display: block;
        position: fixed;
        cursor: pointer;
        right: vw(159);
        &.hide {
            pointer-events: none;
            opacity: 0;
            transition: $transitionDuration;
        }
        i {
            position: absolute;
            right: 0;
            left: 0;
            height: vh(4);
            background-color: black;
            transform: translate(0, -50%);
            border-radius: vh(2);
            &:nth-child(1) {
                top: 50%;
                transform: translate(0, -50%);
            }
            &:nth-child(2) {
                top: 0;
                transform: translate(vw(8), 0);
            }
            &:nth-child(3) {
                bottom: 0;
                transform: translate(vw(-8), 0);
            }
        }
    }
    .about-space, .academic-committee, .aiiiii-vision {
        // position: absolute;
        // top: 0;
        // left: 0;
    }
}
</style>
