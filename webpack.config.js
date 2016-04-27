var getConfig = require('hjs-webpack');

var config = getConfig({
  in: 'src/index.jsx',
  out: 'public',
  clearBeforeBuild: true,
});

config.module.loaders.push({ test: /\.csv$/, loader: 'file-loader' });

module.exports = config;
