# moso-vue
My personal portfolio (re)built\* with [Vue.js](https://vuejs.org) and [Nuxt.js](https://nuxtjs.org) featuring my own [Flexgrid](https://flexgrid.co).

### Installation
Run `yarn install` or `npm install` to install the dependencies.

If you want to use [axios](https://axios.nuxtjs.org) to fetch content from an API, you can use the example file `api.json.example` by typing `cp api.json.example api.json`.

### Scripts
Since this project is built with Nuxt, you have the following scripts at hand:

```shell
$ yarn run dev        # `nuxt` will launch a development server on `localhost:3000` with hot-reloading
$ yarn run build      # `nuxt build` will build your app with webpack, and minify JS & CSS (production)
$ yarn run start      # `nuxt start` will start the server in production mode (after running `nuxt build`)
$ yarn run generate   # `nuxt generate` will build the app and generate every route as HTML files
$ yarn run lint       # ESLint will lint all JS- and Vue-files while ignoring files in `.gitignore`
$ yarn run precommit  # Same as `yarn run lint`, however recommended best practice
```

The usual workflow is to run `yarn run dev` while developing. Then run `yarn run build` and `yarn run generate` to build the app, where the scripts will generate a `~/dist`-folder. In this folder are all the files you'd upload to your host.

You can also run `yarn run build` and `yarn run start` on a dedicated server to run a node.js server. You will have to set up proxying to `localhost:3000` and point the webroot to `/dist/` for this to work. Some prefer this solution, and it will autogenerate the files if they're changed - ie. an ecommerce solution where the product stock changes all the time.

__You can, of course, just use `npm` if you don't have `yarn` available__.

### Folder structure
__Almost__ as per Nuxt standard, the folder structure is as follows:

- `~/assets`
- `~/components`
- `~/layouts`
- `~/plugins`
- `~/static`
- `~/views`*

All common styling belongs in the `~/assets/sass`-folder, and the files are named so it should be easy to find what's what.

All the custom Vue-components resides in the `~/components`-folder.

All layouts resides in the `~/layouts`-folder (yeah, really).

All custom plugin loaders and, in this case, directives and classes resides in the `~/plugins`-folder.

All static content like images and fonts are stored in the `~/static`-folder, as per Nuxt standard.

\* = The only difference from a standard Nuxt installation is, that I'm using a custom router config. Since the standard Nuxt generation of routes doesn't allow me to name routes manually, which I need for `this.$route.name` in the toolbar, I had to solve it this way. That means that all pages that in a standard Nuxt install resides in `~/pages`, are now stored in `~/views`, and manually set up in `/router.js`. The Nuxt config is only set to generate the `/`-route, as this is needed for the index page to work.

### Routing
As mentioned, all routes have to be set up manually. However, it's rather straight forward, and it follows [vue-router](https://router.vuejs.org/en/essentials/named-routes.html)'s scheme. All routes are residing in `/router.js`. Here's an example:

```javascript
import Vue from 'vue'
import Router from 'vue-router'

import PageA from '~/views/page-a.vue'
import PageB from '~/views/page-b.vue'
import PageC from '~/views/page-c.vue'
import PageError from '~/views/page-error.vue'

Vue.use(Router)

export function createRouter() {
    return new Router({
        linkActiveClass: 'router-link-active',
        routes: [
            {
                path: '/page-a',
                component: PageA,
                name: 'Page A'
            },
            {
                path: '/page-b',
                component: PageB,
                name: 'Page B'
            },
            {
                path: '/page-c',
                component: PageC,
                name: 'Page C'
            },
            {
                path: '/404',
                component: PageError,
                name: '404 - not found'
            },
            {
                path: '*',
                redirect: '404'
            }
        ]
    })
}
```

This will generate the routes for `/page-a`, `/page-b`, `/page-c`, `/404`, and will redirect all non-routes (example: `/ghhghghg`) to `/404`.

# Editing content
You probably want to edit the content, if you want to copy the site and just change some stuff.

In this Nuxt install, I'm getting my data from a [Strapi](https://strapijs.org) API with axios. These are fetched with URLs exposed from my own API which are not supplied, thus if you clone and compile, you'll get an error. I'm using a JSON-file named `./api.json`. This file contains the URLs I need for the content of my views in JSON-format. Look at [installation](#installation) on how to create your own. The example-file contains an example on the structure I'm using, which you (of course) aren't bound to use. If you want to use a different file than a `.json`-file, then edit each view. There's a `const api = require('~/api.json')`-line in them that you need to edit. Whether or not you want to keep the structure or the file format, you'll need to edit each `axios.get()` in each view. Building the app *will* produce errors otherwise.

I might add something more elegant in the future.

# Custom components
This project is full of custom and homemade components. Unused components are, of course, not being loaded, to keep the app-size at a minimum.

Perhaps one day I will write some documentation on how they're used, if this is needed. However, since this is just to show my Vue-skills, and since this is a personal website just for me, I haven't written any. **They should be straight forward, though**.

The list is as follows:

### moso-components

##### moso-drawer-list
This is basically the sidenav menu content.

##### moso-profile
This is the small box with the social icons and profile image you see on the front/profile page.

##### moso-profile-item
These items are the social icons in said small box.

##### moso-progressbar
These are the progressbars you see in the Skills-section on the profile page.

##### moso-project
This is the projects you see on the projects page. This is also where I use [vue-masonry](https://github.com/shershen08/vue-masonry).

##### moso-sidenav
This is the sidenav. Yeah... This also includes the sidenav-backdrop - the dark, clickable area that covers the page when the sidebar is active on small devices.  There are some left-over attempts on getting drag to work in a mobile browser. Don't think about it.

##### moso-timeline
This is the timeline you see on the Resume page. A working demo can be found on [my CodePen](https://codepen.io/moso/pen/MpPRgg) with Material Design styling.

##### moso-timeline-item
Wrapper for the items inside `moso-timeline`.

##### moso-toolbar
This is basically just the toolbar for the title and the version badge.

##### version-badge
A simple version badge that is literally just a string with some styling.

##### nano-ripple
This is from the framework [Nano](https://github.com/getnano/nano-framework) that I'm working on in my sparetime. This is the small ripple you see when you click on buttons and the social icons. This is inspired by [Material Design](https://getmdl.io/components/index.html#buttons-section) (look under "button with ripple") and requires a custom directive and a custom class which are both included in this project.

# Issues?
Please report any issues and non-working stuff here on GitHub.

# License
MIT

\* rebuilt = This site used to be a [Polymer](https://polymer-project.org)-site. But I saw the light and rebuilt it from scratch in Vue.
