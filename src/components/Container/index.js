// 组件

import ContainerCardBs from './components/container-card-bs.vue'
export default {
    name: 'Container',
    props: {
        // 容器样式
        type: {
            type: String,
            required: false,
            default: 'full'
        },
        // 滚动优化
        betterScroll: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    computed: {
        // 始终返回渲染组件
        component () {
            if (this.type === 'card') return ContainerCardBs
            else {
                return 'div'
            }

        }
    },
    render (h)
    {
        const slots = [ this.$slots.default ]
        if (this.$slots.header) slots.push(h('template', { slot: 'header' }, [ this.$slots.header ]))
        if (this.$slots.footer) slots.push(h('template', { slot: 'footer' }, [ this.$slots.footer ]))
        return h('div',
            {
                ref: 'container',
                class: 'container-component',
            },
            [
                h(this.component, {
                    ref: 'component',
                    props: this.$attrs,
                    on: {
                        scroll: e => this.$emit('scroll', e)
                    }
                }, slots),
            ]
        )
    },
    methods: {
        // 返回顶部
        scrollTo (x = 0, y = 0, time = 300) {
            const bs = this.$refs.component.BS
            if (bs) {
                bs.scrollTo(-x, -y, time)
                // 手动触发一遍 scroll 事件
                this.$refs.component.scroll()
            }
        },
        // 用法同原生方法 scrollTop
        scrollTop (top = 0, time = 300) {
            const bs = this.$refs.component.BS
            if (bs) {
                bs.scrollTo(bs.x, -top, time)
                // 手动触发一遍 scroll 事件
                this.$refs.component.scroll()
            }

        }
    }
}
