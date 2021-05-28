'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql'
  }
};
