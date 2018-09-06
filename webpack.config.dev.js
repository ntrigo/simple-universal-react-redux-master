const path = require('path');
const webpack = require('webpack');
const AssetsByTypePlugin = require('webpack-assets-by-type-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const assetsPath = './dist/rev-manifest.json';

//write analyser, open browser analyser
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer')
		.BundleAnalyzerPlugin;

const Analyzer = () => {
	if (process.env.ANALYZER === 'analyzer') {
		return new BundleAnalyzerPlugin({
			analyzerPort: parseInt(Math.random() * 8000 + 1025),
			logLevel: 'error'
		});
	}
	return () => {}; //do nothing
};

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'inline-source-map',
  entry: {
    main: ['./src/client/index.js']
  },
  output: {
    publicPath: '/dist/',
    filename: './[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "src/assets")
        ],
        use: 'babel-loader'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              emitFile: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "assets")
        ],
        use: ["style-loader","css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader'
      }
    ],
    plugins: [
      new CompressionPlugin({
        test: /\.js$/,
        filename: '[path].gz',
        algorithm: 'gzip'
      }),
  
      //create the script setting .json
      new AssetsByTypePlugin({path: assetsPath}),
  
      new webpack.ProvidePlugin({
        "React": "react"
      }),
      Analyzer()
    ],
  }
};
