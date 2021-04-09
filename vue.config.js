module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/openapi': {
        target: 'https://e83228320.at.baijiayun.com',
        changeOrigin: true,
        pathRewrite: {
          '^/openapi': '/openapi'
        }
      }
    }
  }
}
