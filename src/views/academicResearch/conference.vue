<template>
    <div class="conference">
        <div class="imgs">
            <div class="img-item"></div>
        </div>
        <div class="article">
            <h4 class="article-title">
                aai<br/>
                International<br/>
                Conference<br/>
                on Art (Ai)
            </h4>
            <h5 class="sub-title">
                2021<br/>
                Speakers<br/>
                Video
            </h5>
            <span class="line"></span>
            <p class="article-content">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
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
.conference {
    // font-size: vh(80);
    display: grid;
    grid-template-columns: minmax(0, auto) vw(760);
    grid-column-gap: vw(124);
    margin: vh(246 + 48) vw(150) 0 vw(150);
    padding-top: vh(2);
    font-size: 0;
    .imgs {
        // text-align: center;
        .img-item {
            border: 1px solid red;
            display: inline-block;
            width: vw(536);
            height: vh(642 + 118);
        }
    }
    .article {
        position: relative;
        .article-title {
            font-size: vh(46 + 8);
            line-height: vh(50 + 10);
            font-weight: 600;
            font-family: GT-America-Expanded-Light;
            color: black;
            transform: scale(0.7, 1);
            transform-origin: 0% 50%;
            letter-spacing: vh(5);
        }
        .sub-title {
            position: absolute;
            right: 0;
            top: 0;
            font-size: vh(46);
            line-height: vh(35);
            font-weight: 600;
            font-family: GT-America-Expanded-Light;
            text-decoration: underline;
            font-size: vh(16 + 4);
            line-height: vh(40);
            text-align: right;
            transform: scale(0.7, 1);
            transform-origin: 100% 50%;
        }
        .article-content {
            margin-top: vh(182 + 28);
            font-size: vh(14);
            line-height: vh(19);
            // font-weight: 600;
            font-family: GT-America-Expanded-Light;
            word-break: break-all;
            margin-left: vw(200);
        }
        .line {
            position: absolute;
            left: vw(100);
            top: vh(279);
            height: vh(390 + 50);
            transform: rotate(26.5deg);
            width: vw(2);
            background-color: black;
        }
    }
}
</style>
