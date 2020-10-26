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
    config.keys = appInfo.name + '_1603257440651_2788';

    // add your middleware config here
    config.middleware = [];

    config.sequelize = {
        dialect: 'mysql',
        host: 'dev.kaixinmatuan.cn',
        port: 3307,
        database: 'kaixinmatuan',
        // 用户名
        username: 'u_kxmt',
        // 密码
        password: 'kxmt@303',
    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    const mysql = {
        client: {
            // host
            host: 'dev.kaixinmatuan.cn',
            // 端口号
            port: '3307',
            // 用户名
            user: 'u_kxmt',
            // 密码
            password: 'kxmt@303',
            // 数据库名
            database: 'kaixinmatuan',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    return {
        ...config,
        ...userConfig,
        mysql
    };
};