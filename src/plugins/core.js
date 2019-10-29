import _ from 'lodash'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import '@/styles/index.scss' // global css

import '@/components' // 组件

import '@/icons' // icon

import '@/permission' // permission control

import Cookies from 'js-cookie'

import Element from 'element-ui'

import '@/styles/element-variables.scss'

import '@smallwei/avue/lib/theme-chalk/index.css';

import Avue from '@smallwei/avue';

import i18n from '@/lang'
// import Vue from "vue/types/vue"; // Internationalization


export default {
    async install (Vue, options) {

        // Element
        Vue.use(Element, {
            size: Cookies.get('size') || 'medium', // set element-ui default size
            i18n: (key, value) => i18n.t(key, value)
        })

        // Avue
        Vue.use(Avue, {
            size: Cookies.get('size') || 'medium', // set avue default size
        })
    }
    // 插件
    // Vue.use(pluginError)
    // Vue.use(pluginLog)
    // Vue.use(pluginOpen)

}
