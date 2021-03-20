# 03-vue-adopt-pet

At the start of creating the app I imported vuex, routes, css using the custom built along witht the default stuff

Error occurred when trying to seperate the config out into their own files so I just avoid doing that part

npm install vue bootstrap bootstrap-vue

import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)

import 'bootstrap/dist/css/bootstrap.css'

import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project

Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin

Vue.use(IconsPlugin)