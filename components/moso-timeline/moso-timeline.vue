<template>
    <ul class="timeline">
        <slot></slot>
    </ul>
</template>
<script>
export default {
    mounted() {
        //
    }
}
</script>
<style lang="scss">
@import './assets/sass/variables';

.timeline {
    list-style: none;
    margin: 0 0 0 .625rem;
    padding: 0;
}
</style>
