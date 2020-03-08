module.exports = {
  devServer: { // 环境配置
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock/'
        }
      }
    }
  }
}
