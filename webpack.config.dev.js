import merge from 'webpack-merge'
import config from './webpack.config'
import express from 'express'
import webpack from 'webpack'
import path from 'path'
import open from 'open'

const port = 1337
const app = express()

let dev = {
	entry: {
		'app': [
			'eventsource-polyfill', // necessary for hot reloading with IE
			'webpack-hot-middleware/client?reload=true' //note that it reloads the page if hot module reloading fails.
		]
	},
	devServer: {
		contentBase: './src'
	},
	module: {
		loaders: [
			{test: /\.(jpe?g|png|gif|svg)$/i, loaders:
				[
					'file?hash=sha512&digest=hex&name=[hash].[ext]',
					'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
				]
			}
		]
	}
}

const compiler = webpack(merge.smart(config, dev))

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function(req, res) {
	res.sendFile(path.join( __dirname, './dist/index.html'))
})

app.listen(port, function(err) {
	if (err) {
		console.log(err)
	} else {
		open(`http://localhost:${port}`)
	}
})