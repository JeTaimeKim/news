var debug = process.env.NODE_ENV !== "production";
var webpack=require('webpack');
var path=require('path');

const context = [`/login`, `/admin/*`];

module.exports={
	devServer:{
		historyApiFallback:true,
		host: 'localhost'
    
		// {
		// 	index:'/'
		// },
	},
	context:path.join(__dirname),
	devtool: debug ? "inline-sourcemap" : null,
	entry:'./src/js/root.js',
	module:{
		rules:[{
			test:/\.js?$/,
			exclude:/(node_modules)/,
			loader: 'babel-loader',
			query:{
				presets:['react','es2015'],
				plugins:['react-html-attrs'],
			},
			//include:__dirname
		},
		{ test: /\.css$/, loader: 'style-loader!css-loader' },
		{ test:/\.less$/,loader:'style-loader!css-loader!less-loader'}
		//{
			//test:/\.css$/,
			//loader:'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			//loader: "style-loader!css-loader"
		//}
	]
	},
	output:{
		path:__dirname,
		//publicPath:"/src/",
		filename:'./src/bundle.js'
	},
	plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
