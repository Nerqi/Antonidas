<template>
  <div class="container-card-bs">
    <div v-if="$slots.header" class="container-card-bs__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="container-card-bs__body" ref="wrapper">
      <div class="container-card-bs__body-wrapper-inner">
        <div class="container-card-bs__body-card">
          <slot/>
        </div>
      </div>
    </div>
    <div v-if="$slots.footer" class="container-card-bs__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'container-card-bs',
        props: {
            // 滚动优化的选项
            betterScrollOptions: {
                type: Object,
                required: false,
                default: () => ({})
            }
        },
        data () {
            return {
                BS: null
            }
        },
        mounted () {
            this.scrollInit()
        },
        beforeDestroy () {
            this.scrollDestroy()
        },
        methods: {
            scrollInit () {
                // 初始化 bs
                this.BS = new BScroll(this.$refs.wrapper, Object.assign({
                    mouseWheel: true,
                    click: true,
                    //preventDefault:false,//当事件派发后是否阻止浏览器默认行为
                    scrollbar: {
                        fade: true,
                        interactive: false
                    }
                }, this.betterScrollOptions))
                // 滚动时发出事件 并且统一返回的数据格式
                this.BS.on('scroll', ({ x, y }) => this.$emit('scroll', {
                    x: -x,
                    y: -y
                }))
            },
            scrollDestroy () {
                // https://github.com/projects/admin/issues/75
                try {
                    this.BS.destroy()
                } catch (e) {
                    delete this.BS
                    this.BS = null
                }
            },
            // 外部调用的方法 返回顶部
            scrollToTop () {
                if (this.BS) this.BS.scrollTo(0, 0, 300)
            },
            // 手动发出滚动事件
            scroll () {
                if (this.BS) {
                    this.$emit('scroll', {
                        x: -this.BS.x,
                        y: -this.BS.y
                    })
                }
            }
        }
    }
/*import bs from './mixins/bs'
export default {
  name: 'container-card-bs',
  mixins: [
    bs
  ]
}*/
</script>
<style lang="scss">
    .container-card-bs {
        position: absolute;
        top: 0px;
        right: 0;
        bottom: 0px;
        left: 0px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .container-card-bs__header {
            padding: 20px;
        }
        .container-card-bs__body {
            position: relative;
            flex-grow: 1;
            overflow: hidden;
            .container-card-bs__body-wrapper-inner {
               // padding-bottom: 20px;
            }
            .container-card-bs__body-card {
                position: relative;
                padding: 20px;
                border-bottom-left-radius: 4px;
                border-bottom-right-radius: 4px;
            }
        }
        .container-card-bs__footer {
            padding: 20px;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }
    }
    .container-card-bs {
        .container-card-bs__header {
            border-bottom: $theme-container-border-inner;
            //border-left: $theme-container-border-outer;
            //border-right: $theme-container-border-outer;
            background: $theme-container-header-footer-background-color;
        }
        .container-card-bs__body {
            .container-card-bs__body-card {
                background: $theme-container-background-color;
                //border-left: $theme-container-border-outer;
                //border-right: $theme-container-border-outer;
                border-bottom: $theme-container-border-outer;
            }
        }
        .container-card-bs__footer {
            border-top: $theme-container-border-outer;
            //border-left: $theme-container-border-outer;
            //border-right: $theme-container-border-outer;
            background: $theme-container-header-footer-background-color;
        }
    }




</style>
