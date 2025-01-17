const { i18n } = require('./next-i18next.config');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: [process.env.ASSETS_BASE_URL],
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: 'http://196.192.73.27:8080/uploads/:path*', // Set your actual destination
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/uploads/:path*',
        destination: 'http://196.192.73.27:8080/uploads/:path*', // Set your actual destination
        permanent: false,
      },
    ];
  },
  async serverMiddleware() {
    const proxy = createProxyMiddleware({
      target: 'http://196.192.73.27:8080',
      changeOrigin: true,
      pathRewrite: { '^/uploads': '/' },
    });

    return (req, res, next) => {
      if (req.url.startsWith('/uploads')) {
        proxy(req, res, next);
      } else {
        next();
      }
    };
  },
};
