const path = require('path');

module.exports = {
  publicPath: 'https://theironcook.github.io/sgmv2/dist',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/shared.scss";`
      }
    }
  }
};