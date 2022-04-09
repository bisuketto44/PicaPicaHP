require = require('esm')(module);
const {
  routes
} = require('./src/router');

var sitemapRoutes = routes.map(x => {
  x.path = `/PicaPicaHP${x.path}`;
  return x;
})

module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  pluginOptions: {
    sitemap: {
      baseURL: 'https://bisuketto44.github.io',
      routes: sitemapRoutes,
    }
  }
}