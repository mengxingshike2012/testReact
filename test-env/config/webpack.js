'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
module.exports = {
  // mode: 'development',
  entry: './test-env/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: {
          loader: 'happypack/loader?id=happyLess',
        },
      },
      // {
      //   test: /\.less$/,
      //   use: {
      //     loader: 'happypack/loader?id=happyLess',
      //   },
      // },
      {
        test: /\.js$/,
        use: {
          loader: 'happypack/loader?id=happyBabel',
        },
      },
    ],
  },
  plugins: [
    
    new HtmlWebpackPlugin({
      template: './test-env/app.html',
    }), new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: true,
      __UMD__: false,
      NODE_ENV:JSON.stringify('development'),
      spyOnDev: false,
      spyOnDevAndProd: false,
      spyOnProd: false,
      __PROFILE__: true,
    }),
    new HappyPack({
        //用id来标识 happypack处理那里类文件
      id: 'happyBabel',
      //如何处理  用法和loader 的配置一样
      loaders: [{
        loader: 'babel-loader?cacheDirectory=false',
      }],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    }),
    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'happyLess',
      //如何处理  用法和loader 的配置一样
      loaders: ['style-loader', 'css-loader'],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    }),
  ],
  devtool: 'inline-source-map', // enum
  devServer: {
    contentBase: path.join(__dirname, 'test-env'),
    port: 9000,
    hot: true,
    overlay: true,
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../../packages'),
      path.resolve(__dirname, '../../packages/shared'),
      path.resolve(__dirname, '../../packages/scheduler'),
      path.resolve(__dirname, '../../packages/react-reconciler'),
      path.resolve(__dirname, '../../packages/react-is'),
      path.resolve(__dirname, '../../packages/react-stream'),
      path.resolve(__dirname, '../../packages/react-noop-renderer'),
      path.resolve(__dirname, '../../packages/react-art'),
      path.resolve(__dirname, '../../packages/react-cache'),
      path.resolve(__dirname, '../../packages/react-dom'),
      path.resolve(__dirname, '../../packages/create-subscription'),
      path.resolve(__dirname, '../../packages/events'),
      path.resolve(__dirname, '../../packages/react'),
    ],
    alias: {
      '@packages': path.resolve(__dirname, '../../packages/'),
    },
  },
};
