const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const config = {
  entry: [
    path.resolve(__dirname, 'resources/js/app.js'),
    path.resolve(__dirname, 'resources/sass/app.scss')
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'resources/'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.(ttf|otf|eot|woff2?)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    }),
    new StyleLintPlugin({
      failOnError: false,
      syntax: 'scss'
    }),
    new BrowserSyncPlugin({
      open: true,
      delay: 500,
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] }
    }),
    new FriendlyErrorsWebpackPlugin()
  ],
  output: {
    filename: 'js/app.js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: path.resolve(__dirname, 'public')
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'resources'),
      'node_modules'
    ],
    enforceExtension: false,
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}

module.exports = (env, argv) => {
  const isPrd = argv.mode === 'production'

  config.plugins.push(
    new OptimizeCSSAssetsPlugin({})
  )

  return {
    devtool: isPrd ? 'source-map' : 'inline-source-map',
    mode: isPrd ? 'production' : 'development',
    ...config
  }
}
