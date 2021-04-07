module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/?service=App.Common_Upload.Go': {
        target: 'https://wkapi.shejizhizi.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/web': '/web'
        }
      }
    }
  }
}
