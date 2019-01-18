import Vue from 'vue'
import Router from 'vue-router'

import profile from '~/views/profile.vue'
import resume from '~/views/resume.vue'
import projects from '~/views/projects.vue'
import error from '~/views/error.vue'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        linkActiveClass: 'router-link-active',
        routes: [
            {
                path: '/',
                component: profile,
                name: 'Profile '
            },
            {
                path: '/profile',
                component: profile,
                name: 'Profile'
            },
            {
                path: '/resume',
                component: resume,
                name: 'Resume'
            },
            {
                path: '/projects',
                component: projects,
                name: 'Projects'
            },
            {
                path: '/404',
                component: error,
                name: '404 - not found'
            },
            {
                path: '*',
                redirect: '404'
            }
        ]
    })
}
