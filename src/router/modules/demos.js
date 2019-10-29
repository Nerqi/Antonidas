/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const demosRouter = {
    path: '/demos',
    component: Layout,
    redirect: 'noredirect',
    name: 'Demos',
    meta: {
        title: 'Demos',
        icon: 'component'
    },
    children: [
        {
            path: 'guide',
            component: () => import('@/views/demos/guide/index'),
            name: 'Guide',
            meta: { title: 'guide', icon: 'plane', noCache: true }
        },


        {
            path: 'icon',
            component: () => import('@/views/svg-icons/index'),
            name: 'Icons',
            meta: { title: 'icons', icon: 'plane', noCache: true }
        },

        {
            path: 'tab',
            component: () => import('@/views/tab/index'),
            name: 'Tab',
            meta: { title: 'tab', icon: 'plane' }
        },
        {
            path: 'theme',
            component: () => import('@/views/theme/index'),
            name: 'Theme',
            meta: { title: 'theme', icon: 'plane' }
        },
        {
            path: 'i18n',
            component: () => import('@/views/demos/i18n-demo/index'),
            name: 'I18n',
            meta: { title: 'i18n', icon: 'plane' }
        }
    ]
}

export default demosRouter
