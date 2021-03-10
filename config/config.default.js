'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592963839644_7255';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.html': 'art',
    },
  };

  config.mongoose = {
    url: 'mongodb://127.0.0.1/blog',
    options: {
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
