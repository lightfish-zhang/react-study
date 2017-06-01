const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const Express = require('express');
const path = require('path');

const app = new Express();
const port = 3000;

const compiler = webpack(config);

// express.use(path, function) 在path的请求上都会执行function
// express.use(function) 在所有请求上都会执行function
app.use(webpackDevMiddleware(
    compiler,
    {
        noInfo: true,
        publicPath: config.output.publicPath
    })
);

// now compiler and output ./static/bundle.js in web server
app.use(webpackHotMiddleware(compiler));


app.get('/', (request, result) => {
    result.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/ueditor/ueditor.config.js', (request, result) => {
    result.sendFile(path.join(__dirname, './dist/ueditor/ueditor.config.js'));
});
app.get('/ueditor/ueditor.all.min.js', (request, result) => {
    result.sendFile(path.join(__dirname, './dist/ueditor/ueditor.all.min.js'));
});
app.get('/ueditor/themes/default/css/ueditor.min.css', (request, result) => {
    result.sendFile(path.join(__dirname, './dist/ueditor/themes/default/css/ueditor.min.css'));
});
app.get('/ueditor/lang/zh-cn/zh-cn.js', (request, result) => {
    result.sendFile(path.join(__dirname, './dist/ueditor/lang/zh-cn/zh-cn.js'));
});

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
    }
});
