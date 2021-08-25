<template>
    <div class="jake-elwes">
        {{ msg }}
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            msg: 'jake-elwes'
        }
    }
}
</script>
<style lang="stylus" scoped>
.jake-elwes {
    font-size: vh(80);
    // display: grid;
    // grid-template-columns: vw(760) minmax(0, auto);
    // grid-column-gap: vw(100);
    margin: vh(246) vw(150) 0 vw(150);
}
</style>
