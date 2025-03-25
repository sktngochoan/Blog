const siteRouter = require('./site.route');
const newsRouter = require('./news.route');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = routes;