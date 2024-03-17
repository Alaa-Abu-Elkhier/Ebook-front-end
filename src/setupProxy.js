const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://192.168.8.43:8000', // Your backend server URL
      changeOrigin: true,
    })
  );
};
