"use strict";
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = new (require('express'))();
const port = 3000;

const compiler = webpack(config);

//express.use(path, function) 在path的请求上都会执行function
//express.use(function) 在所有请求上都会执行function
app.use(webpackDevMiddleware(
    compiler,
    {
        noInfo: true,
        publicPath: config.output.publicPath
    })
);

//now compiler and output ./static/bundle.js in web server
app.use(webpackHotMiddleware(compiler));


app.get('/', (request, result)=>{
    result.sendFile(__dirname + '/index.html')
});

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
