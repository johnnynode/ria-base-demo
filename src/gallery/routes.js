/*
    提供路由功能
 */
define(function(require){
    var router = require('../common/router');
    /* 路由表 => 我们自定义设置的 */
    var rules = [
        {hash:'',handler:require('./all')},
        {hash:'#/all',handler:require('./all')},
        {hash:'#/person',handler:require('./person')},
        {hash:'#/scenery',handler:require('./scenery')},
        {hash:'#/animal',handler:require('./animal')}
    ];
    /*  分配路由 */
    rules.forEach(function (rule) {
        router.addRule(rule.hash,rule.handler);
    });
})