const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = !isDevelopment;

const getOptimization = () => {
  const config = {
    // splitChunks: {
    //   chunks: 'all',
    // },
  };

  if (isProduction) {
    config.minimize = true;
    config.minimizer = [new TerserPlugin(), new OptimizeCssAssetsPlugin()];
  }

  return config;
};

const getFilename = (extension) =>
  isDevelopment ? `[name].${extension}` : `[name].[hash].${extension}`;

module.exports = {
  mode: 'development',
  entry: {
    main: path.join(__dirname, 'src', 'index.tsx'),
    // analytics: path.join(__dirname, 'src', 'analytics.ts'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: getFilename('js'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      assets: path.resolve(__dirname, 'src/assets/'),
    },
  },
  devServer: {
    port: 5000,
    client: {
      progress: true,
    },
  },
  // devtool: isDevelopment ? false : eval(),
  optimization: getOptimization(),
  devtool: isDevelopment ? 'source-map' : '',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
      minify: {
        collapseWhitespace: isProduction,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: getFilename('css'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: isDevelopment
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
          },
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: isDevelopment
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
};
