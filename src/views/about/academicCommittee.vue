<template>
    <div class="academic-committee">
        <div class="imgs">
            <div class="img-item"></div>
        </div>
        <div class="article">
            <h4 class="article-title">Kostas Terzidis</h4>
            <p class="article-content">AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
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
.academic-committee {
    // font-size: vh(80);
    display: grid;
    grid-template-columns: minmax(0, auto) vw(760);
    grid-column-gap: vw(124);
    margin: vh(246) vw(150) 0 vw(150);
    padding-top: vh(77 + 60);
    font-size: 0;
    .imgs {
        text-align: center;
        .img-item {
            border: 1px solid red;
            display: inline-block;
            width: vw(400);
            height: vh(452 + 84);
        }
    }
    .article {
        .article-title {
            font-size: vh(46 + 8);
            line-height: vh(100);
            font-weight: 900;
            font-family: GT-America-Expanded-Light;
            transform: scale(0.7, 1);
            color: black;
            transform-origin: 0% 50%;
        }
        .article-content {
            margin-top: vh(24);
            font-size: vh(14);
            line-height: vh(19);
            // font-weight: 600;
            font-family: GT-America-Expanded-Light;
            word-break: break-all;
            // transform: scale(0.7, 1);
        }
    }
}
</style>
