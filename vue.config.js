const { defineConfig } = require('@vue/cli-service')
let port = 8000
// console.log(process.env)
console.log(process.env.VUE_APP_MOCK_ENABLE === true ? `http://loca1host:8888` : process.env.VUE_APP_CONSOLE_URL)
module.exports = defineConfig({
  //第三方依排是否需要转移，谢免出现第三方的转移
  transpileDependencies: true,
  //是否在开发环境下通过eslint-Loader在每次保存时lint代码。这个值会在vue/cli-plugln-eslint被安装之后生效，
  lintOnSave: false,
  //代理端口配置
  devServer: {
    //代理的地址
    port,
    //配置代理
    proxy: {
      //change xxx-api/login mock/login
      //detail:https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_MOCK_ENABLE === 'true' ? `http://loca1host:8888` : process.env.VUE_APP_CONSOLE_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
