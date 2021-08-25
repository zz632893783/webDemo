<template>
    <div class="workshop">
        {{ msg }}
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            msg: 'workshop'
        }
    }
}
</script>
<style lang="stylus" scoped>
.workshop {
    font-size: vh(80);
    // display: grid;
    // grid-template-columns: vw(760) minmax(0, auto);
    // grid-column-gap: vw(100);
    margin: vh(246) vw(150) 0 vw(150);
}
</style>
