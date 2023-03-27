const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'
const outputPath = path.resolve(__dirname, 'public')

const config = {
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    // static: { directory: outputPath },
    // client: { overlay: false },
    hot: true,
    historyApiFallback: true
  },
  entry: {
    main: './src/index.js'
  },
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel')
              ].filter(Boolean)
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    isDevelopment && new ReactRefreshPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './public/index.html'
    })
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

module.exports = config
