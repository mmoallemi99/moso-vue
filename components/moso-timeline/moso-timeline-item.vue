<template>
    <li>
        <h3 class="title">{{ entry }}</h3>
        <div class="information">
            <span class="location" v-if="location">
                <img src="/images/map-marker.svg" alt="Location"> {{ location }}
            </span>
            <span class="time">{{ time }}</span>
        </div>
        <slot></slot>
    </li>
</template>
<script>
export default {
    props: {
        entry: {
            type: String
        },
        location: {
            type: String
        },
        time: {
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

li {
    position: relative;
    margin: 0;
    padding: 0 0 1rem 1rem;
    border-left: 2px solid rgba(0,0,0,.12);

    &:before {
        content: '';
        width: 1.125rem;
        height: 1.125rem;
        position: absolute;
        left: -10px;
        top: -7px;
        border-radius: 50%;
        background-color: #fff;
        padding: .25rem;
        border: 2px solid $primary;
    }

    @media (min-width: 768px) {
        padding: 0 0 2.5rem 2.5rem;
    }

    .title {
        position: relative;
        top: -10px;
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0;
    }

    &:first-child {
        .title {
            margin-top: .625rem;
        }
    }

    &:last-of-type {
        border: 0;

        @media (min-width: 768px) {
            padding: 0 0 0 2.5rem;
        }

        &:before {
            left: -8px;
        }
    }

    .information {
        display: flex;
        align-items: center;
        margin-top: -7px;
        padding: 0 0 .375rem;

        .location {
            font-size: .75rem;
            color: rgba(0,0,0,.54);

            img {
                position: relative;
                top: 1px;
                width: .75rem;
                height: .75rem;
                margin-right: .125rem;
                opacity: .35;
            }
        }

        .time {
            margin-left: auto;
            font-size: .875rem;
            font-weight: 300;
            color: rgba(0,0,0,.54);
        }
    }

    p {
        margin: 0 0 .625rem;
        color: rgba(0,0,0,.65);
    }
}
</style>
