'use strict'
const resolve = dir => require('path').join(__dirname, dir)
const pkg = require('./package.json')

const name =  process.env.VUE_APP_TITLE || pkg.name // page title
const port = 8901 // dev port
const serverPort = 8901 // server port

// 增加环境变量
process.env.VUE_APP_VERSION = pkg.version

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    // lintOnSave: process.env.NODE_ENV === 'development' ? 'error' : false,
    lintOnSave: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: `http://localhost:${serverPort}/mock`,
                changeOrigin: true, // 本地会虚拟一个服务端接收你的请求并代你发送该请求
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
        after(app) {
            require('@babel/register')
            const bodyParser = require('body-parser')

            // parse app.body
            // http://expressjs.com/en/4x/api.html#req.body
            app.use(bodyParser.json())
            app.use(bodyParser.urlencoded({
                extended: true
            }))

            const { default: mocks } = require('./mock')
            for (const mock of mocks) {
                app[mock.type](mock.url, mock.response)
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                data: '@import "@/assets/scss/_var.scss";' // 这个文件下的变量是全局的
            },
        }
    },
    chainWebpack(config) {

        config.plugins.delete('preload') // TODO: need test
        config.plugins.delete('prefetch') // TODO: need test

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

        // set preserveWhitespace
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
            .end()

        config
            .when(process.env.NODE_ENV === 'development',
                config => config.devtool('cheap-source-map')
            )

        config
            .when(process.env.NODE_ENV !== 'development',
                config => {
                    config
                        .plugin('ScriptExtHtmlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.js$/
                        }])
                        .end()
                    config
                        .optimization.splitChunks({
                        chunks: 'all',
                        cacheGroups: {
                            libs: {
                                name: 'chunk-libs',
                                test: /[\\/]node_modules[\\/]/,
                                priority: 10,
                                chunks: 'initial' // only package third parties that are initially dependent
                            },
                            elementUI: {
                                name: 'chunk-elementUI', // split elementUI into a single package
                                priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                test: /[\\/]node_modules[\\/]element-ui[\\/]/
                            },
                            commons: {
                                name: 'chunk-commons',
                                test: resolve('src/components'), // can customize your rules
                                minChunks: 3, //  minimum common number
                                priority: 5,
                                reuseExistingChunk: true
                            }
                        }
                    })
                    config.optimization.runtimeChunk('single')
                }
            )
    }
}
