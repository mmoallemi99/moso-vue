<template>
    <profile />
</template>
<script>
import Profile from '~/views/profile.vue'

export default {
    layout: 'default',
    components: {
        'profile': Profile
    },
    data() {
        return {
            title: 'Profile'
        }
    },
    head() {
        return {
            title: this.title
        }
    },
    mounted() {
        this.$store.commit('SET_PAGE_TITLE', this.title)
    }
}
</script>
