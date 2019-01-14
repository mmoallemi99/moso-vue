<template>
    <div id="app">
        <div class="container:fluid">
            <div class="row">
                <moso-sidenav ref="sidenav">
                    <div class="logo">
                        <a href="/" @click="closeSidenav" title="Home">
                            <img src="/images/logo.svg" alt="Logo">
                        </a>
                    </div>
                    <div class="profile-picture">
                        <div class="media">
                            <div class="image">
                                <img src="/images/profile.jpg" alt="Morten Sørensen">
                            </div>
                            <p>Morten S&oslash;rensen</p>
                            <p>Front-End Engineer, Website Magician</p>
                        </div>
                    </div>
                    <moso-drawer-list ref="drawerList">
                        <li>
                            <nuxt-link to="/profile" :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/profile'}">
                                <span @click="closeSidenav">
                                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M 8 2 C 6.347656 2 5 3.347656 5 5 C 5 6.652344 6.347656 8 8 8 C 9.652344 8 11 6.652344 11 5 C 11 3.347656 9.652344 2 8 2 Z M 8 8 C 5.246094 8 3 10.246094 3 13 L 4 13 C 4 10.785156 5.785156 9 8 9 C 10.214844 9 12 10.785156 12 13 L 13 13 C 13 10.246094 10.753906 8 8 8 Z M 8 3 C 9.109375 3 10 3.890625 10 5 C 10 6.109375 9.109375 7 8 7 C 6.890625 7 6 6.109375 6 5 C 6 3.890625 6.890625 3 8 3 Z " />
                                    </svg>
                                    Profile
                                </span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/resume">
                                <span @click="closeSidenav">
                                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M 4.5 2 C 3.675781 2 3 2.675781 3 3.5 L 3 12.5 C 3 13.324219 3.675781 14 4.5 14 L 11.5 14 C 12.324219 14 13 13.324219 13 12.5 L 13 3.5 C 13 2.675781 12.324219 2 11.5 2 Z M 4.5 3 L 11.5 3 C 11.78125 3 12 3.21875 12 3.5 L 12 12.5 C 12 12.78125 11.78125 13 11.5 13 L 4.5 13 C 4.21875 13 4 12.78125 4 12.5 L 4 3.5 C 4 3.21875 4.21875 3 4.5 3 Z M 7 4 C 6.449219 4 6 4.449219 6 5 C 6 5.550781 6.449219 6 7 6 C 7.550781 6 8 5.550781 8 5 C 8 4.449219 7.550781 4 7 4 Z M 7 6 C 5.898438 6 5 6.898438 5 8 L 9 8 C 9 6.898438 8.101563 6 7 6 Z M 10 5 L 10 6 L 11 6 L 11 5 Z M 10 7 L 10 8 L 11 8 L 11 7 Z M 5 9 L 5 10 L 11 10 L 11 9 Z M 5 11 L 5 12 L 11 12 L 11 11 Z " />
                                    </svg>
                                    Resume
                                </span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/projects">
                                <span @click="closeSidenav">
                                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M 2.5 2 A 0.5 0.5 0 0 0 2 2.5 A 0.5 0.5 0 0 0 2.5 3 A 0.5 0.5 0 0 0 3 2.5 A 0.5 0.5 0 0 0 2.5 2 z M 8.8847656 3 C 8.4166796 3 8 3.3770408 8 3.8632812 L 8 5 L 3 5 L 3 4 L 2 4 L 2 10.5 C 2 11.322531 2.6774686 12 3.5 12 L 8 12 L 8 13.166016 C 8 13.663421 8.4384889 13.998047 8.8847656 13.998047 L 13.115234 13.998047 C 13.561411 13.998047 14.001953 13.66161 14.001953 13.166016 L 14.001953 10.832031 C 14.001953 10.334625 13.561511 10 13.115234 10 L 10.867188 10 L 10.552734 9.4472656 C 10.393074 9.1618119 10.092658 9 9.7792969 9 L 8.8847656 9 C 8.4166796 9 8 9.3770409 8 9.8632812 L 8 11 L 3.5 11 C 3.2185314 11 3 10.781469 3 10.5 L 3 6 L 8 6 L 8 7.1679688 C 8 7.6628682 8.4379818 7.9991915 8.8847656 7.9980469 L 13.115234 7.9980469 C 13.561411 7.9980469 14.001953 7.6616098 14.001953 7.1660156 L 14.001953 4.8320312 C 14.001953 4.3346256 13.561511 4 13.115234 4 L 10.867188 4 L 10.552734 3.4472656 C 10.393074 3.1618119 10.092658 3 9.7792969 3 L 8.8847656 3 z M 9 4 L 9.7167969 4 L 10.066406 4.6152344 L 10.246094 5 L 10.564453 5 L 13.001953 5 L 13.001953 6.9980469 L 9 6.9980469 L 9 4 z M 9 10 L 9.7167969 10 L 10.066406 10.615234 L 10.246094 11 L 10.564453 11 L 13.001953 11 L 13.001953 12.998047 L 9 12.998047 L 9 10 z" />
                                    </svg>
                                    Projects
                                </span>
                            </nuxt-link>
                        </li>
                        <li>
                            <a href="https://blog.moso.io" target="_blank" rel="noopener">
                                <span @click="closeSidenav">
                                    <svg viewBox="0 0 85 87" xmlns="http://www.w3.org/2000/svg" class="ghost-svg">
                                        <rect x=".209" y="69.017" width="33.643" height="17.014" rx="4"/>
                                        <rect x="50.672" y="69.017" width="33.622" height="17.014" rx="4"/>
                                        <rect x=".184" y="34.99" width="84.121" height="17.014" rx="4"/>
                                        <rect x=".209" y=".964" width="50.469" height="17.013" rx="4"/>
                                        <rect x="67.494" y=".964" width="16.821" height="17.013" rx="4"/>
                                    </svg>
                                    Blog
                                </span>
                            </a>
                        </li>
                    </moso-drawer-list>
                    <div class="footer">
                        <span>Made with <img src="/images/heart.svg" alt="Love"> and <a href="https://vuejs.org" title="Vue.js" target="_blank" rel="noopener"><img src="/images/vue-logo.svg" alt="Vue.js"></a> &#43; <a href="https://nuxtjs.org" title="Nuxt.js" target="_blank" rel="noopener"><img src="/images/nuxt-logo.svg" alt="Nuxt.js"></a></span>
                    </div>
                </moso-sidenav>
                <div class="app-layout">
                    <div class="header">
                        <moso-toolbar fixed>
                            <button class="nav-toggle" @click="toggleSidenav" aria-label="Toggle navigation">
                                <svg viewBox="0 0 24 24">
                                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                                </svg>
                            </button>
                            <div class="page-title"><h1>{{ this.$route.name }}</h1></div>
                            <version-badge version="v4.2-nuxt" />
                        </moso-toolbar>
                    </div>
                    <main>
                        <nuxt />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MosoSidenav from '~/components/moso-sidenav/moso-sidenav.vue'
import MosoDrawerList from '~/components/moso-drawer-list/moso-drawer-list'
import MosoToolbar from '~/components/moso-toolbar/moso-toolbar.vue'
import VersionBadge from '~/components/version-badge/version-badge.vue'

export default {
    components: {
        'moso-sidenav': MosoSidenav,
        'moso-drawer-list': MosoDrawerList,
        'moso-toolbar': MosoToolbar,
        'version-badge': VersionBadge
    },
    methods: {
        toggleSidenav() {
            this.$refs.sidenav.toggle();
        },
        closeSidenav() {
            this.$refs.sidenav.close();
        }
    }
}
</script>
<style lang="scss">
@import './assets/sass/variables';

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    box-shadow: $box-shadow;

    img {
        width: auto;
        height: 57px;
        padding: .3125rem 0;
    }
}

.profile-picture {
    padding: .9125rem;
    text-align: center;
    box-shadow: $box-shadow;

    .image {
        width: 100px;
        height: 100px;
        margin: 1px auto 8px auto;

        img {
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid $border-color;
        }
    }

    .media {
        & >>> p {
            margin: 0;
            text-align: center;
            color: $text-color-sidenav;

            &:first-of-type {
                font-size: 1.25rem;
                font-weight: 400;
                margin: 0;
            }

            &:last-of-type {
                font-size: .804rem;
            }
        }
    }
}

[moso-drawer-list],
#drawerMenu {
    li {
        display: flex;
        height: 40px;

        a {
            display: block;
            width: 100%;
            padding: 0 2rem;
            font-weight: 400;
            color: $sidenav-link-color;
            line-height: 40px;
            user-select: none;
            text-decoration: none;
            transition: color .2s ease-in-out;
            -webkit-tap-highlight-color: rgba(255,255,255,0);

            span {
                display: flex;
                align-items: center;
                height: 40px;
            }

            svg {
                position: relative;
                top: -1px;
                width: 1.125rem;
                height: 1.125rem;
                margin-right: 10px;
                fill: $sidenav-link-color;
                transition: fill .2s ease-in-out;

                &.ghost-svg {
                    width: 1.125rem;
                    height: .8125rem;
                }
            }

            &:hover,
            &:focus,
            &:active,
            &:hover:active {
                background-color: transparent !important;
                color: lighten($sidenav-link-color, 10%);
                outline: none;
                user-select: none;
                text-decoration: none;

                svg {
                    fill: lighten($sidenav-link-color, 10%);
                }
            }

            &.router-link-active,
            &.active {
                color: $sidenav-active-link-color;
                font-weight: 600;

                svg {
                    fill: $sidenav-active-link-color;
                }

                &:hover,
                &:focus,
                &:active,
                &:hover:active {
                    color: $sidenav-active-link-color;
                    outline: none;
                    user-select: none;
                    text-decoration: none;

                    svg {
                        fill: $sidenav-active-link-color;
                    }
                }
            }
        }
    }
}

.profile-picture {
    p {
        margin: 0;
        text-align: center;
        color: $text-color-sidenav;

        &:first-of-type {
            font-size: 1.25rem;
            font-weight: 400;
            margin: 0 0 .3125rem;
        }

        &:last-of-type {
            font-size: .804rem;
            font-weight: 300;
        }
    }
}

.footer {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    color: #546e7a;
    text-align: center;

    span {
        img {
            width: auto;
            height: 12px;
            margin: 0 2px;
        }
    }
}
</style>
