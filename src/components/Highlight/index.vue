<template>
    <pre class="container-highlight hljs" v-html="highlightHTML"></pre>
</template>

<script>
    // 相关文档
    // https://highlightjs.org/usage/
    // http://highlightjs.readthedocs.io/en/latest/api.html#configure-options
    import highlight from 'highlight.js'
    import '@/styles/highlight-github-gist.css'
    import htmlFormat from './libs/htmlFormat'
    export default {
        name: 'highlight',
        props: {
            code: {
                type: String,
                required: false,
                default: ''
            },
            formatHtml: {
                type: Boolean,
                required: false,
                default: false
            },
            lang: {
                type: String,
                required: false,
                default: ''
            }
        },
        data () {
            return {
                highlightHTML: ''
            }
        },
        mounted () {
            this.highlight()
        },
        watch: {
            code () {
                this.highlight()
            }
        },
        methods: {
            highlight () {
                const code = this.formatHtml ? htmlFormat(this.code) : this.code
                this.highlightHTML = highlight.highlightAuto(code, [
                    this.lang,
                    'html',
                    'javascript',
                    'json',
                    'css',
                    'scss',
                    'less'
                ]).value
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container-highlight {
        margin: 0;
        border-radius: 4px;

    }
</style>
