<template>
    <div class="resident-plan">
        {{ msg }}
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            msg: 'residentPlan'
        }
    }
}
</script>
<style lang="stylus" scoped>
.resident-plan {
    font-size: vh(200);
    padding-top: vh(200);
}
</style>
