const path = require('path')

module.exports = {
    outputDir: './build',
    publicPath: './', // 修改打包资源路径，部署到服务器时，不需要修改为相对路径
    chainWebpack: config => {
        config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('@components', '@/components')
    }
}
