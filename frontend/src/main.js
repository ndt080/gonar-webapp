import {createApp} from 'vue'
import {createMetaManager} from 'vue-meta'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import 'gsap/dist/gsap'
import 'gsap/dist/ScrollTrigger'
import 'animate.css'


createApp(App).use(router).use(store).use(createMetaManager()).mount('#app')
