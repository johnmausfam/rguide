const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      'webpack-dev-server/client?http://localhost:3000/',
      'webpack/hot/dev-server',
      path.resolve(__dirname, 'src/index.tsx')
    ]
  },
  output: {
    filename: '[name].js',
    publicPath: '/assets/'
  },
  plugins:[
  	new webpack.HotModuleReplacementPlugin(),
  	new webpack.SourceMapDevToolPlugin()
  ],
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
      rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
  }
  /*
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
  */
};
