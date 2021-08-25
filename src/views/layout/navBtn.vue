<template>
    <div class="nav-btn" v-on:click.stop>
        <div :class="['btn', show ? 'hide' : 'show']" v-on:click="showNavBar" v-show="!show">
            <i></i>
            <i></i>
            <i></i>
        </div>
        <div :class="['nav', show ? 'show' : 'hide']">
            <div class="nav-item" v-for="(item, index) in navList" v-bind:key="index" v-html="item.name" v-on:click="jumpTo(item)"></div>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            show: false,
            navList: [{
                name: '&nbsp;&nbsp;About<br/>Aiiiii',
                path: '/about/aboutSpace'
            }, {
                name: 'Manifesto',
                path: '/manifesto'
            }, {
                name: 'Exhibition',
                path: '/exhibition/entanledOthers'
            }, {
                name: '&nbsp;&nbsp;Artist<br/>Studio',
                path: '/artistStudio/artist'
            }, {
                name: '&nbsp;&nbsp;Academic<br/>Research',
                path: '/academicResearch/innovation'
            }, {
                name: 'Events',
                path: '/events/workshop'
            }, {
                name: '&nbsp;&nbsp;&nbsp;Aiiiii<br/>Gallery',
                path: '/gallery/zeroTwoOne'
            }, {
                name: '&nbsp;&nbsp;&nbsp;&nbsp;Plan<br/>&nbsp;&nbsp;Your<br/>Visit',
                path: '/visitPlan/tickketAddress'
            }, {
                name: 'Subscribe',
                path: '/subscribe'
            }]
        }
    },
    methods: {
        jumpTo: function (routeObj) {
            this.hideNavBar()
            this.$router.push({
                path: routeObj.path
            })
        },
        hideNavBar: function () {
            this.show = false
            // this.$emit('setInputShowState', true)
        },
        showNavBar: function () {
            this.show = true
            // this.$emit('setInputShowState', false)
        }
    },
    mounted: function () {
        window.addEventListener('click', this.hideNavBar)
    },
    beforeDestroy: function () {
        window.removeEventListener('click', this.hideNavBar)
    }
}
</script>
<style lang="stylus" scoped>
.nav-btn {
    position: fixed;
    top: 0;
    bottom: 0;
    // border: 1px solid red;
    right: vw(159);
    .btn {
        width: vw(48);
        height: vh(28 + 5);
        margin-top: vh(80 + 16);
        display: block;
        position: relative;
        cursor: pointer;
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
    .nav {
        position: fixed;
        top: 0;
        right: vw(-4);
        transform-origin: 100% 0%;
        transform: skewX(-30deg);
        width: vw(247);
        border-left: vw(2) solid black;
        border-right: vw(2) solid black;
        background-color: white;
        height: 0;
        opacity: 0;
        transition: linear $transitionDuration;
        pointer-events: none;
        &.show {
            height: 100vh;
            opacity: 1;
            pointer-events: auto;
            .nav-item {
                transform: skewX(30deg) translate(0, vh(20)) scale(0.7, 1);
                opacity: 1;
                cursor: pointer;
                &:nth-child(1) {
                    transition-delay: (0.025 * 0)s;
                }
                &:nth-child(2) {
                    transition-delay: (0.025 * 1)s;
                }
                &:nth-child(3) {
                    transition-delay: (0.025 * 2)s;
                }
                &:nth-child(4) {
                    transition-delay: (0.025 * 3)s;
                }
                &:nth-child(5) {
                    transition-delay: (0.025 * 4)s;
                }
                &:nth-child(6) {
                    transition-delay: (0.025 * 5)s;
                }
                &:nth-child(7) {
                    transition-delay: (0.025 * 6)s;
                }
                &:nth-child(8) {
                    transition-delay: (0.025 * 7)s;
                }
                &:nth-child(9) {
                    transition-delay: (0.025 * 8)s;
                }
            }
        }
        &.hide {
            .nav-item {
                transform: skewX(30deg) translate(-200%, 0) scale(0.7, 1);
                opacity: 0;
                &:nth-child(1) {
                    transition-delay: (0.025 * 8)s;
                }
                &:nth-child(2) {
                    transition-delay: (0.025 * 7)s;
                }
                &:nth-child(3) {
                    transition-delay: (0.025 * 6)s;
                }
                &:nth-child(4) {
                    transition-delay: (0.025 * 5)s;
                }
                &:nth-child(5) {
                    transition-delay: (0.025 * 4)s;
                }
                &:nth-child(6) {
                    transition-delay: (0.025 * 3)s;
                }
                &:nth-child(7) {
                    transition-delay: (0.025 * 2)s;
                }
                &:nth-child(8) {
                    transition-delay: (0.025 * 1)s;
                }
                &:nth-child(9) {
                    transition-delay: (0.025 * 0)s;
                }
            }
        }
        .nav-item {
            line-height: vh(32 - 1);
            font-size: vh(22 + 5);
            margin-top: vh(61);
            transform: skewX(30deg) translate(0, vh(0)) scale(0.7, 1);
            padding-left: vw(67);
            font-family: GT-America-Expanded-Light;
            font-weight: 600;
            transition: $transitionDuration;
            &:nth-child(1) {
                padding-left: vw(67 - 30);
            }
            &:nth-child(2) {
                padding-left: vw(54 - 34);
            }
            &:nth-child(3) {
                padding-left: vw(56 - 34);
            }
            &:nth-child(4) {
                padding-left: vw(67 - 34);
            }
            &:nth-child(5) {
                padding-left: vw(42 - 28);
            }
            &:nth-child(6) {
                padding-left: vw(72 - 28);
            }
            &:nth-child(7) {
                padding-left: vw(72 - 28);
            }
            &:nth-child(8) {
                padding-left: vw(72 - 28);
            }
            &:nth-child(9) {
                padding-left: vw(60 - 38);
            }
        }
    }
}
</style>
