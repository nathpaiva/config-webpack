'user strict'

const webpack = require('webpack');
const WebpackDevDerver = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevDerver(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true }
}).listen(2929, (err) => {
    if(err){
        return console.log('err', err);
    }

    console.log('Listening on http://localhost:2929');
});
