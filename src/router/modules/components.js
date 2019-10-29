/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noredirect',
  name: 'ComponentDemo',
  meta: {
    title: 'components',
    icon: 'sub-unit'
  },
  children: [

    {
      path: 'sticky',
      component: () => import('@/views/components/sticky'),
      name: 'StickyDemo',
      meta: { title: 'sticky'  ,icon: 'plane'}
    },
    {
      path: 'count-to',
      component: () => import('@/views/components/countTo'),
      name: 'CountToDemo',
      meta: { title: 'countTo' ,icon: 'plane' }
    },
    {
      path: 'mixin',
      component: () => import('@/views/components/mixin'),
      name: 'ComponentMixinDemo',
      meta: { title: 'componentMixin' ,icon: 'plane' }
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/components/backToTop'),
      name: 'BackToTopDemo',
      meta: { title: 'backToTop' ,icon: 'plane' }
    }

  ]
}

export default componentsRouter
