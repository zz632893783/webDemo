<template>
    <div class="subscribe">
        <!-- <div class="view" v-bind:style="`opacity: ${ opacity / 100 };`"></div>
        <div class="control">
            <el-slider v-model="opacity"></el-slider>
        </div> -->
        <div class="content">
            <div class="input-box">
                <input placeholder="Full Name" />
            </div>
            <div class="input-box">
                <input placeholder="E-mail"/>
            </div>
            <div class="input-box">
                <input placeholder="Occupation"/>
            </div>
            <div class="other">
                <i v-bind:class="agree ? 'check' : ''"></i>
                <span class="text">I agree to the</span>
                <span class="view-defail"> trems to use</span>
            </div>
            <span class="sign-up-btn">Sign Up</span>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            opacity: 50,
            form: {
                fullName: '',
                email: '',
                occupation: '',
                agree: false
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.subscribe {
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
        height: vh(190);
        background-color: white;
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
            // background-image: url('~@/assets/image/10订阅.png');
            height: 1280px;
        }
    }
    .content {
        position: fixed;
        top: 47.8%;
        left: 50%;
        transform: translate(-56%, -50%);
        text-align: center;
        // border: 1px solid red;
        .input-box {
            border-bottom: vh(2) solid black;
            position: relative;
            // height: vh(60);
            margin-bottom: vh(24 + 6 - 8);
            &:before, &:after {
                content: '';
                position: absolute;
                bottom: 0;
                height: vh(20 + 4);
                width: vw(2);
                background-color: black;
                transform-origin: 50% 100%;
                transform: rotate(30deg);
            }
            &:before {
                left: 0;
            }
            &:after {
                right: 0;
            }
            input {
                border: none;
                width: vw(390);
                line-height: vh(68 + 8);
                outline: none;
                background-color: transparent;
                text-align: center;
                font-size: vh(14 + 6);
                color: black;
                transform: scale(0.7, 1);
            }
        }
        .other {
            margin-top: vh(50 + 10);
            text-align: left;
            i {
                border: vh(2) solid black;
                display: inline-block;
                vertical-align: middle;
                width: vw(28 + 2);
                height: vh(20 + 2);
                transform: skewX(-30deg);
                margin-left: vw(4);
            }
            .text, .view-defail {
                font-size: vh(20);
                display: inline-block;
                vertical-align: middle;
            }
            .text {
                margin-left: vw(32);
            }
            .view-defail {
                margin-left: vw(8);
                text-decoration: underline;
            }
        }
        .sign-up-btn {
            display: inline-block;
            margin-top: vh(50 + 6 + 10);
            font-size: vh(28 + 4);
            transform: translate(vw(4), 0);
        }
    }
}
</style>
