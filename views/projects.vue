<template>
    <div class="container:fluid">
        <div class="row portfolio">
            <div class="md:12 xl:10 xl:offset:1">
                <no-ssr>
                    <div class="row" v-masonry transition-duration="0.2s" item-selector=".xl\:6">
                        <div class="sm:12 xl:6 masonry-column" v-masonry-tile v-for="project in projects" :key="project.id">
                            <moso-project :image="project.image" :project-title="project.title" :sub-title="project.subtitle" :link="project.url" :icon="project.icon" class="moso-project">
                                <span v-html="project.description"></span>
                            </moso-project>
                        </div>
                    </div>
                </no-ssr>
            </div>
        </div>

        <div class="row resume">
            <div class="md:12 xl:10 xl:offset:1">
                <div class="row">
                    <div class="sm:12">
                        <h2 class="stuff-headline">I've also made stuff for</h2>
                    </div>
                </div>
                <no-ssr>
                    <div class="row" v-masonry transition-duration="0.2s" item-selector=".lg\:6">
                        <div class="md:12 lg:6 masonry-column" v-masonry-tile v-for="smallproject in smallprojects" :key="smallproject.id">
                            <moso-project class="single moso-project" :image="smallproject.image" :project-title="smallproject.title" :sub-title="smallproject.subtitle" />
                        </div>
                    </div>
                </no-ssr>
            </div>
        </div>
    </div>
</template>
<script>
import MosoProject from '~/components/moso-project/moso-project.vue'

import NoSSR from 'vue-no-ssr'
import axios from 'axios'

export default {
    layout: 'default',
    components: {
        'moso-project': MosoProject,
        'no-ssr': NoSSR
    },
    data() {
        return {
            projects: [],
            smallprojects: []
        }
    },
    async asyncData({ req, params }) {
        performance.mark('getProjects:start')
        const [
            { data: projects },
            { data: smallprojects }
        ] = await Promise.all([
            axios.get('https://api.morten.is/projects'),
            axios.get('https://api.morten.is/smallprojects')
        ])
        return {
            projects,
            smallprojects
        }
        performance.mark('getProjects:end')
    },
    mounted() {
        if (typeof this.$redrawVueMasonry === 'function') {
            this.$redrawVueMasonry()
        }
    }
}
</script>
<style lang="scss" scoped>
.masonry-column {
    .moso-project {
        margin-bottom: 1rem;

        @media (min-width: 992px) {
            margin-bottom: 2rem;
        }

        .project-body {
            span {
                p {
                    margin: 0 0 1rem;

                    &:last-of-type {
                        margin: 0;
                    }
                }
            }
        }
    }

    &:last-of-type {
        .moso-project {
            margin-bottom: 0;
        }
    }
}
</style>
