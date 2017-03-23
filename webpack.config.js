<<<<<<< HEAD
var webpack = require('webpack');
var path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}
=======
var path = require('path');
>>>>>>> 779add616b5ee325180b6659635920d0960e408a

module.exports = {

  // This is the entry point or start of our react applicaton
<<<<<<< HEAD
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
=======
  entry: "./src/app.js",

>>>>>>> 779add616b5ee325180b6659635920d0960e408a
  // The plain compiled JavaScript will be output into this file
  output: {
    path: path.join(__dirname, "public"),

    filename: "bundle.js"
  },
<<<<<<< HEAD
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api'
    ],
  alias: {
    app: 'src/app.js',
    applicationStyles: 'app/styles/app.scss',
    actions: 'src/actions/taskActions.jsx',
    reducers: 'app/reducers/taskReducers.jsx',
    configureStore: 'src/store.js'
  },
  extensions: ['', '.js', '.jsx']
},
=======

>>>>>>> 779add616b5ee325180b6659635920d0960e408a
  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /src/,
        loader: "babel",
        query: {
          // These are the specific transformations we'll be using.

          presets: ["react", "es2015", "stage-0"],

          plugins: ['transform-class-properties', 'transform-decorators-legacy', 'transform-object-rest-spread']
        }
      }
    ]
  },

  sassLoader: {
  includePaths: [
    path.resolve(__dirname, './node_modules/foundation-sites/scss')
  ]
},
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'

  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
};
