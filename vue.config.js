const path = require('path');

module.exports = {
  assetsDir: 'https://theironcook.github.io/sgmv2/dist',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/shared.scss";`
      }
    }
  }
};