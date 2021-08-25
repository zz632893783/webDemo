<template>
    <div class="nav-bar">
        <div :class="['nav-item', active === index ? 'active' : '']" v-for="(item, index) in tabs" v-bind:key="index" v-on:click="clickNavBar(item, index)">
            <h4 class="title" v-html="item.title"></h4>
            <!-- <p class="sub-title" v-html="item.subTitle"></p> -->
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            active: 0,
            tabs: [{
                title: 'Art & Artificial Intelligence Lab,<br/>Tongji University<br/>Collego of Design and Innovation',
                // subTitle: '&nbsp;&nbsp;&nbsp;Architectual History<br/>Spatial Structure',
                path: '/academicResearch/innovation'
            }, {
                title: 'aii International Conference<br/>on Ard (Ai)',
                // subTitle: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kostas Terzidis<br/>&nbsp;&nbsp;&nbsp;Filippo Fabrocini<br/>Zhoujie Zhang',
                path: '/academicResearch/conference'
            }]
        }
    },
    methods: {
        clickNavBar: function (navItem, index) {
            this.active = index
            this.$router.push({
                path: navItem.path
            })
        },
        computeActiveRouter: function () {
            switch (this.$route.path) {
            case '/about/aboutSpace':
                this.active = 0
                break
            case '/about/academicCommittee':
                this.active = 1
                break
            case '/about/aiiiiiVision':
                this.active = 2
                break
            }
        }
    },
    mounted: function () {
        this.computeActiveRouter()
    }
}
</script>
<style lang="stylus" scoped>
.nav-bar {
    .nav-item {
        width: vw(616);
        &:nth-child(1) {
            .title {
                transform: translate(0, vh(-30)) scale(0.7, 1);
                line-height: vh(32);
            }
        }
        &:nth-child(2) {
            .title {
                transform: translate(0, vh(-20)) scale(0.7, 1);
                line-height: vh(34);
            }
        }
        &.active {
            &:before, &:after {
                height: vh(64);
            }
        }
    }
}
</style>
