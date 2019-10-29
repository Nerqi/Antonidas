import Vue from 'vue'

import App from './App'

import core from '@/plugins/core'// 核心插件

import store from './store'

import router from './router'

import i18n from './lang' // Internationalization

import * as filters from './filters' // global filters

import { mockXHR } from '../mock' // simulation data

// mock api in github pages site build
if (process.env.NODE_ENV === 'production') { mockXHR() }

// 核心插件
Vue.use(core)
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
