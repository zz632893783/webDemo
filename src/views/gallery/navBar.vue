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
                title: '021',
                // subTitle: '&nbsp;&nbsp;&nbsp;Architectual History<br/>Spatial Structure',
                path: '/gallery/zeroTwoOne'
            }, {
                title: 'CertainMeasures',
                // subTitle: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kostas Terzidis<br/>&nbsp;&nbsp;&nbsp;Filippo Fabrocini<br/>Zhoujie Zhang',
                path: '/gallery/certainMeasures'
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
        &.active {
            &:before, &:after {
                height: vh(64);
            }
        }
    }
}
</style>
