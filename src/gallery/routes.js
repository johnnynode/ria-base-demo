/*
    提供一套路由表 (自定义的路由表)
 */
define(function(require){
    var router = require('../common/router');
    /* 路由表 => 我们自定义设置的 */
    var rules = [
        {hash:'',handler:require('./all')},
        {hash:'all',handler:require('./all')},
        {hash:'person',handler:require('./person')},
        {hash:'scenery',handler:require('./scenery')},
        {hash:'animal',handler:require('./animal')},
        {hash:'settings',handler:require('./settings')}
    ];
    /*  去分配路由 */
    rules.forEach(function (rule) {
        router.addRule(rule.hash,rule.handler);
    });
})