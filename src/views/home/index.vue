<template>
    <div class="home">
        <!-- <div class="view" v-bind:style="`opacity: ${ opacity / 100 };`"></div>
        <div class="control">
            <el-slider v-model="opacity"></el-slider>
        </div> -->
        <!-- <nav-bar ref="navBar" v-on:setInputShowState="setInputShowState"></nav-bar> -->
        <input :class="['search-box', show ? 'show' : 'hide']" />
        <!-- 随机展示结果 -->
        <div class="info-list">
            <div class="info-item" v-for="(text, index) in infoList" v-bind:key="index">{{ text }}</div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        // navBar
    },
    data: function () {
        return {
            msg: 'home',
            opacity: 0,
            show: true,
            infoList: [
                'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
                'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
            ]
        }
    },
    methods: {
        setInputShowState: function (state) {
            this.show = state
        }
    }
}
</script>
<style lang="stylus" scoped>
.home {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    // >>>.el-scrollbar__wrap {
    //     overflow-x: hidden;
    // }
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
            // height: 1080px;
            // top: 50%;
            // left: 50%;
            // transform: translate(-50%, -50%);
            height: 1280px;
            background-size: 100% 100%;
            top: 0;
            left: 0;
            // background-image: url('~@/assets/image/01首页.png');
            // background-image: url('~@/assets/image/01首页-栏目.png');
            // background-image: url('~@/assets/image/01首页2.png');
        }
    }
    .search-box {
        position: fixed;
        top: 50%;
        left: 44%;
        transform: skewX(-34.3deg) translate(-50%, -50%);
        height: vh(340);
        width: vw(1050);
        padding-left: vw(64);
        font-size: vh(214);
        color: black;
        outline: none;
        border: vh(4) solid black;
        z-index: 1;
        transition: $transitionDuration;
        &.hide {
            // transform: skewX(-34.3deg) translate(-50%, -150%);
            opacity: 0;
            pointer-events: none;
        }
    }
    .info-list {
        height: 100vh;
        position: relative;
        .info-item {
            position: absolute;
            word-break: break-all;
            font-size: vh(30);
            text-align: center;
            background-color: rgba(0, 0, 0, 0);
            transition: $transitionDuration;
            border-radius: vw(10);
            padding: vh(10) vw(10);
            line-height: vh(40);
            &:hover {
                background-color: rgba(0, 0, 0, 0.05);
                cursor: default;
            }
            &:nth-child(1) {
                left: vw(-80);
                top: vh(274);
                width: vw(800);
                transform: rotate(-20deg);
            }
            &:nth-child(2) {
                left: vw(800);
                top: vh(164);
                width: vw(1200);
                transform: rotate(20deg);
            }
            &:nth-child(3) {
                left: vw(800);
                top: vh(414);
                width: vw(920);
                transform: rotate(10.25deg);
            }
            &:nth-child(4) {
                left: vw(-44);
                top: vh(764);
                width: vw(920);
                transform: rotate(-39.5deg);
            }
            &:nth-child(5) {
                left: vw(340);
                top: vh(1058);
                width: vw(850);
                transform: rotate(14deg);
            }
            &:nth-child(6) {
                left: vw(1310);
                top: vh(898);
                width: vw(850);
                transform: rotate(-21deg);
            }
        }
    }
    .nav-bar {
        z-index: 2;
        >>>.nav {
            background-color: white;
        }
    }
}
</style>
