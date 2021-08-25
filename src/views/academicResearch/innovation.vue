<template>
    <div class="innovation">
        <div class="imgs">
            aai
        </div>
        <div class="article">
            <!-- <h4 class="article-title">Exhibitions Intro</h4> -->
            <p class="article-content">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        </div>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            msg: 'academicCommittee'
        }
    }
}
</script>
<style lang="stylus" scoped>
.innovation {
    // font-size: vh(80);
    display: grid;
    grid-template-columns: minmax(0, auto) vw(760 - 120 - 120);
    grid-column-gap: vw(124 + 120);
    margin: vh(246) vw(150 + 120) 0 vw(150);
    padding-top: vh(2);
    font-size: 0;
    .imgs {
        // text-align: center;
        // .img-item {
        //     border: 1px solid red;
        //     display: inline-block;
        //     width: vw(507);
        //     height: vh(642);
        // }
        font-size: vh(360 + 10);
        line-height: vh(580 + 200);
        text-align: center;
        color: black;
        // transform: scale(0.7, 1);
    }
    .article {
        // .article-title {
        //     font-size: vh(46);
        //     line-height: vh(58);
        //     font-weight: 600;
        //     font-family: GT-America-Expanded-Light;
        // }
        .article-content {
            margin-top: vh(28);
            font-size: vh(14);
            line-height: vh(19);
            // font-weight: 600;
            font-family: GT-America-Expanded-Light;
            word-break: break-all;
            margin-top: vh(246 + 94);
        }
    }
}
</style>
