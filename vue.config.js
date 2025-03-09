const path = require('path')

module.exports = {
    outputDir: './build',
    // publicPath: './', // 修改打包资源路径，部署到服务器时，不需要修改为相对路径
    devServer: {
        proxy: {
            '/api': {
                // http://152.136.185.210:5000 或者 codercba.com:5000
                target: 'http://123.207.32.32:5000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    // 配置方式一：通过chainWebpack自定义配置
    chainWebpack: config => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('@components', '@/components')
    }

    // 配置方式二：通过configureWebpack自定义配置
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@': path.resolve(__dirname, 'src'),
    //             '@components': '@/components'
    //         }
    //     },
    // }
    // 配置方式三：通过configureWebpack自定义配置
    // configureWebpack: config => {
    //     config.resolve.alias = {
    //         '@': path.resolve(__dirname, 'src'),
    //         '@components': '@/components'
    //     }
    // }
}
