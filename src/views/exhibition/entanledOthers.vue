<template>
    <div class="entanled-others">
        <div class="imgs">
            <div class="img-item"></div>
            <div class="img-item"></div>
        </div>
        <div class="article">
            <h4 class="article-title">Exhibitions Intro</h4>
            <p class="article-content">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
            <span class="video-btn" v-on:click="dialogVisible = true">Video</span>
            <h5 class="article-sub-title">The Book Of Sand: Jorge Luis Borges</h5>
            <p class="article-content">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        </div>
        <el-dialog :visible.sync="dialogVisible">
            <div class="video"></div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            dialogVisible: false
        }
    }
}
</script>
<style lang="stylus" scoped>
.entanled-others {
    font-size: vh(80);
    display: grid;
    grid-template-columns: vw(760) minmax(0, auto);
    grid-column-gap: vw(100);
    margin: vh(246 + 50) vw(150) 0 vw(150);
    .imgs {
        // text-align: center;
        .img-item {
            border: 1px solid red;
            height: vh(644 + 116);
            margin-bottom: vh(34);
        }
    }
    .article {
        font-size: 0;
        .article-title {
            font-size: vh(46 + 12);
            line-height: vh(56);
            font-weight: 600;
            font-family: GT-America-Expanded-Light;
            margin-bottom: vh(34 + 14);
            transform: scale(0.7, 1);
            transform-origin: 0% 50%;
            color: black;
        }
        .article-content {
            font-size: vh(14);
            line-height: vh(22);
            // font-weight: 600;
            font-family: GT-America-Expanded-Light;
            word-break: break-all;
            color: black;
        }
        .video-btn {
            display: inline-block;
            text-decoration: underline;
            font-size: vh(16 + 4);
            margin-top: vh(22 + 6);
            cursor: pointer;
            font-family: GT-America-Expanded-Light;
            color: black;
            transform: scale(0.7, 1);
            transform-origin: 0% 50%;
            letter-spacing: vw(1);
        }
        .article-sub-title {
            font-size: vh(21);
            // line-height: vh(56);
            font-weight: 600;
            font-family: GT-America-Expanded-Light;
            margin-top: vh(136 + 25);
            margin-bottom: vh(20);
            color: black;
            transform: scale(0.7, 1);
            transform-origin: 0% 50%;
        }
    }
    >>>.el-dialog__wrapper {
        background-color: rgba(white, 0.2);
    }
    >>>.el-dialog {
        .video {
            height: vh(500);
            border: 1px solid black;
        }
    }
}
</style>
