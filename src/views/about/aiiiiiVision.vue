<template>
    <div class="aiiiii-vision">
        {{ msg }}
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            msg: 'aiiiiiVision'
        }
    }
}
</script>
<style lang="stylus" scoped>
.aiiiii-vision {
    font-size: vh(80);
    // display: grid;
    // grid-template-columns: vw(760) minmax(0, auto);
    // grid-column-gap: vw(100);
    margin: vh(246) vw(150) 0 vw(150);
}
</style>
