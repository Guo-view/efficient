const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './', //公共路径,根路径
  transpileDependencies: true,
  productionSourceMap: false, //生产环境的构造一般选择不开启
  //pro ->production  （生产，全量，真机）环境
  //stage (灰度，备机)
  // test --- 测试环境，也可以自己使用
  // dev --- 我们可以使用的开发环境
  lintOnSave: false,
  outputDir: 'dist', //输出文件地址
  assetsDir: 'static', //静态资源文件放置
  devServer: {
    //配置服务器
    // port:8089, //端口号
    //https:false, //是否启动加密
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/', // 本地后端地址
        // target: 'http://baidu.com', // 线上后端地址
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
