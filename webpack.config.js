//require our dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    //the base directory (absolute path) for resolving the entry option
    context: __dirname,
    entry: [
        // hot-reload server live edit without creating bundle everytime
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        //the entry point we created earlier. Note that './' means
    //your current directory. You don't have to specify the extension  now,
    //because you will specify extensions later in the `resolve` section
        './assets/src/index'
    ],

    output: {
        //where you want your compiled bundle to be stored
        path: path.resolve('./assets/bundles'),
        //naming convention webpack should use for your files
        filename: '[name]-[hash].js',
        //Tell django to check this folder for bundles
        publicPath: 'http://localhost:3000/assets/bundles/',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
       //tells webpack where to store data about your bundles.
       new BundleTracker({filename: './webpack-stats.json'}),
       //makes jQuery available in every module
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],

    module: {
        loaders: [
            //a regexp that tells webpack use the following loaders on all
            //.js and .jsx files
            {
                test: /\.jsx?$/,
                //we definitely don't want babel to transpile all the files in
                //node_modules. That would take a long time.
                exclude: /node_modules/,
                //use the babel loader and preset for compile es2016 it's in .babelrc
                loaders: ['react-hot-loader', 'babel-loader?presets[]=react,presets[]=es2015'],
            },
            //to use bootstrap and uss below loaders are require
            // load all .css extesnion in css-loader and style-loader

            {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},

            // load all .svg in url-loader

            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'url-loader'
            }
        ]
    },

    resolve: {
        //tells webpack where to look for modules
        modules: ['node_modules'],
        //extensions that should be used to resolve modules
        extensions: ['*', '.js', '.jsx']
    }
}
