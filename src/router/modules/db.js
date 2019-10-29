/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const dbRouter = {
    path: '/db',
    component: Layout,
    redirect: 'noredirect',
    name: 'Dersistenc',
    meta: {
        title: '数据持久化',
        icon: 'database'
    },
    children: [
        {
            path: 'page-snapshot-public',
            component: () => import('@/views/db/pageSnapshotPublic/index.vue'),
            name: 'PageSnapshotPublic',
            meta: { title: '路由快照', icon: 'plane', noCache: true }
        },
        {
            path: 'page-snapshot-user',
            component: () => import('@/views/demos/guide/index'),
            name: '私有路由快照',
            meta: { title: 'guide', icon: 'plane', noCache: true }
        },

    ]
}

export default dbRouter
