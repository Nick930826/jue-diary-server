/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606747991901_2391';

  // add your middleware config here
  config.middleware = [];

  config.jwt = {
    secret: 'Nick',
  };

  config.multipart = {
    mode: 'file',
    fileSize: '50kb'
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: [ '*' ], // 配置白名单
  };
  config.cors = {
    // origin:'*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许 Cookie 跨域跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    uploadDir: 'app/public/upload'
  };

  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'cxy930826',
      // 数据库名
      database: 'jue-cost',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.cluster = {
    listen: {
      path: '',
      port: 7009,
      hostname: '0.0.0.0'
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
