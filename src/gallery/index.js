/*
    index.js模块用于处理业务的主入口。
 */
define(function(require){
    /* 引入依赖模块  */
    var $ = require('jquery');
    var locator = require('common/locator');
    var router = require('common/router');
    
    /* 设置路由表 */
    require('./routes');
    /*  调用locator中的函数  */
    locator.start(function() {
        router.route(location.hash);
    });
})