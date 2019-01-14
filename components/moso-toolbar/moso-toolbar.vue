<template>
    <div class="toolbar" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        fixed: {
            default: false,
            type: Boolean
        }
    },
    mounted() {
        //
    },
    computed: {
        classes() {
            return {
                'fixed': this.fixed
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import './assets/sass/variables';

.toolbar {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 65px;
    padding: 0 1rem;
    background-color: #fff;
    font-size: 1.25rem;
    color: $rgba-black;
    box-shadow: $box-shadow;

    @media (min-width: 992px) {
        width: calc(100% - #{$sidenav-width});
    }

    &.fixed {
        position: fixed;
        top: 0;
        z-index: 2;
    }
}
</style>
