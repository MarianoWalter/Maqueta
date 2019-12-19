const webpack = require('webpack');

module.exports = {
	lintOnSave: false,
	configureWebpack: {
		plugins: [
			// Plugin para exponer jQuery globalmente
			new webpack.ProvidePlugin({
				jQuery: 'jquery',
				$: 'jquery',
			}),
		],
	},
};
