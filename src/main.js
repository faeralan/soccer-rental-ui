import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { VuelidatePlugin } from '@vuelidate/core'
import axios from 'axios'
import VueAxios from 'vue-axios'

// require('./plugins/fontawesome');

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VuelidatePlugin)
app.use(VueAxios,axios)
app.mount('#app')
