/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const demosRouter = {
    path: '/avue',
    component: Layout,
    redirect: 'noredirect',
    name: 'Avue',
    meta: {
        title: 'Avue库',
        icon: 'ku'
    },
    children: [
        {
            path: 'crud',
            component: () => import('@/views/avue/crud/index'),
            name: 'Crud',
            meta: { title: '基础',icon: 'plane' }
        },
        {
            path: 'dateGroup',
            component: () => import('@/views/avue/utils/dateGroup'),
            name: 'DateGroup',
            meta: { title: '日期选择器' ,icon: 'plane'}
        },
        {
            path: 'search',
            component: () => import('@/views/avue/utils/search'),
            name: 'search',
            meta: { title: '搜索' ,icon: 'plane'}
        },
        {
            path: 'page',
            component: () => import('@/views/avue/crud/page'),
            name: 'Page',
            meta: { title: '分页' ,icon: 'plane'}
        },

    ]
}

export default demosRouter
