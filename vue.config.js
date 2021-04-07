module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://wkapi.shejizhizi.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    disableHostCheck: true
  }
}
