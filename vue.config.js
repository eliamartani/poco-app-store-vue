module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/poco-app-store-vue/' : '/',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'App Store - VueJs'
    }
  }
}
