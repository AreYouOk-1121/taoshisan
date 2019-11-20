
const px2rem = require('postcss-px2rem') 

// 配置postcs-px2rem 
const postcss = px2rem({ 
  remUnit: 37.5 // 是根据设计稿等比分割后的值 如：375/10
}) 

module.exports = {
  runtimeCompiler: true, // 运行时包含编译器的版本
  lintOnSave: false, // 关闭ESLint编译
  css: { // 添加postcss配置 
    loaderOptions: { 
      postcss: { 
        plugins: [ postcss ] 
      } 
    } 
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,// 是否可以跨域
        pathRewrite: {
          '^/api': ''
        },
      },
    }
  }
}