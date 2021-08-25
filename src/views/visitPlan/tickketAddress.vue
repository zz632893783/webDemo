<template>
    <div class="tickket-address">
        <div class="address">
            Chunxi<br/>
            Road<br/>
            No800<br/>
            Minhang<br/>
            District,<br/>
            Shanghai<br/>
            China<br/>
        </div>
        <div class="map" id="map-container"></div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            map: null
        }
    },
    methods: {
        createMap: function () {
            window.AMapLoader.load({
                // 申请好的Web端开发者Key，首次调用 load 时必填
                key: 'd5e4d1728303e118106bd8524d660a17',
                // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                version: '1.4.15',
                // 需要使用的的插件列表，如比例尺'AMap.Scale'等
                plugins: [],
                // 是否加载 AMapUI，缺省不加载
                AMapUI: {
                    // AMapUI 缺省 1.1
                    version: '1.1',
                    // 需要加载的 AMapUI ui插件
                    plugins: ['overlay/SimpleMarker']
                },
                // 是否加载 Loca， 缺省不加载
                Loca: {
                    // Loca 版本，缺省 1.3.2
                    version: '1.3.2'
                }
            }).then((AMap) => {
                this.map = new AMap.Map('map-container', {
                    zoom: 14,
                    center: [116.39, 39.9]
                })
            }).catch((e) => {
                // 加载错误提示
                console.error(e)
            })
        }
    },
    mounted: function () {
        this.createMap()
    }
}
</script>
<style lang="stylus" scoped>
.tickket-address {
    font-size: vh(80);
    display: grid;
    grid-template-columns: vw(760 - 340) minmax(0, auto);
    // grid-column-gap: vw(100);
    margin: vh(246 + 50) vw(150) 0 vw(150);
    .address {
        color: rgb(51, 51, 51);
        font-size: vh(50);
        line-height: vh(64);
    }
    .map {
        height: vh(760);
    }
}
</style>
