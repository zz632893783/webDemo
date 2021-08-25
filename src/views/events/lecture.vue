<template>
    <div class="lecture">
        {{ msg }}
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            msg: 'lecture'
        }
    }
}
</script>
<style lang="stylus" scoped>
.lecture {
    font-size: vh(80);
    // display: grid;
    // grid-template-columns: vw(760) minmax(0, auto);
    // grid-column-gap: vw(100);
    margin: vh(246) vw(150) 0 vw(150);
}
</style>
