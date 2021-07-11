const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false, // 打包时不生成.map文件
  devServer: {
    port: 8099,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 路径重写，
          '^/api': ''
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
