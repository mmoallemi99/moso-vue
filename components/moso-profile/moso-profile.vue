<template>
    <div class="profile">
        <div class="profile-image">
            <img :src="image" :alt="name">
        </div>
        <h4>{{ name }}</h4>
        <h6>{{ position }}</h6>
        <div class="icon-group">
            <ul>
                <slot></slot>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        image: {
            type: String
        },
        name: {
            type: String
        },
        position: {
            type: String
        }
    },
    mounted() {
        //
    }
}
</script>
<style lang="scss" scoped>
@import './assets/sass/variables';

.profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.75rem;
    text-align: center;

    .profile-image {
        width: 125px;

        img {
            width: 100%;
            height: auto;
            border-radius: 50%;
            border: 2px solid $border-color;
        }
    }

    h4 {
        margin: .625rem 0 0;
        font-size: 1.125rem;
        font-weight: 600;
        color: $rgba-black;
    }

    h6 {
        margin: 0;
        font-size: .8125rem;
        font-weight: 400;
        color: rgba(0,0,0,.54);
    }

    .icon-group {
        margin: .215rem 0 0;
        width: 100%;
        font-size: 1.5rem;

        ul {
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 200px;
            margin: 0 auto;
            padding: 0;
            list-style-type: none;
        }
    }
}
</style>
