const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware node server.js');

const app = express();

// Set up a proxy for requests to /uploads/ to be forwarded to http://localhost:1337
app.use(
  '/uploads',
  createProxyMiddleware({
    target: 'http://localhost:1337',
    changeOrigin: true, // Needed for virtual hosted sites
    pathRewrite: { '^/uploads': '/' }, // Remove the /uploads prefix
  })
);


