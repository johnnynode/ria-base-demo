/*
    index.js模块用于处理业务的主入口。
 */
define(function(require){
    /* 引入依赖模块  */
    var $ = require('jquery');
    var locator = require('../common/locator');
    var router = require('../common/router');
    var url = require('../common/url');
    
    /* 设置路由表 */
    require('./routes');
    
    /*  调用locator 中的函数  */
    locator.start(function() {
        /* 把hash值解析成一个对象 */
        var request = url.parse(location.hash);
        router.route(request);
    });
    
    
    
})