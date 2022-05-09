require = require('esm')(module);
const {
  routes
} = require('./src/router');

var sitemapRoutes = routes.map(x => {
  x.path = `/#/${x.path}`;
  return x;
})

module.exports = {
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  pluginOptions: {
    sitemap: {
      baseURL: 'https://master--picapicahp.netlify.app',
      routes: sitemapRoutes,
    }
  }
}