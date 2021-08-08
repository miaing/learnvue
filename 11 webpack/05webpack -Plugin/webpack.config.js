const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyjswebpackplugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    }, 
    module:{
        rules: [
            {
              test: /\.css$/i,
              //css-loader只负责将css文件进行修改
              //style-loader负责将css文件添加到dom中
              use: ['style-loader','css-loader'],
            },
            {
              test: /\.less$/i,
              use: [{
                loader:'style-loader' 
              },
              {
                loader: 'css-loader'
              },
              {
                loader:'less-loader' 
              }],
            },
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015']
                }
              }
            },
            {
              test:/\.vue$/,
              use:['vue-loader']
            }
          ],
    },
    resolve:{
      alias:{
        'vue$':'vue/dist/vue.esm.js'
      }
    },
    plugins:[
      new webpack.BannerPlugin('最终版权归我所有'),
      new HtmlWebpackPlugin({
        template:'01index.html'
      }),
      new uglifyjswebpackplugin()
    ],
    devServer:{
      contentBase:'./dist',
      inline:true
    }
    
}