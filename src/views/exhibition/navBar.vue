<template>
    <div class="nav-bar">
        <div :class="['nav-item', active === index ? 'active' : '']" v-for="(item, index) in tabs" v-bind:key="index" v-on:click="clickNavBar(item, index)">
            <h4 class="title">{{ item.title }}</h4>
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
                title: 'Entanled Others',
                // subTitle: '&nbsp;&nbsp;&nbsp;Architectual History<br/>Spatial Structure',
                path: '/exhibition/entanledOthers'
            }, {
                title: 'Sofia Crespo',
                // subTitle: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kostas Terzidis<br/>&nbsp;&nbsp;&nbsp;Filippo Fabrocini<br/>Zhoujie Zhang',
                path: '/exhibition/sofiaCrespo'
            }, {
                title: 'Jake Elwes',
                // subTitle: '&nbsp;&nbsp;&nbsp;Architectual History<br/>Spatial Structure',
                path: '/exhibition/jakeElwes'
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
                height: vh(54 + 10);
            }
        }
    }
}
</style>
