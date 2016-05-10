/*
       路由，控制不同请求的转发功能
 */

define(function () {
    // 额外的一份数据，就是路由的规则
    var rules = {};
    return {
        route:function(request){
            var path = request.path;
            if(rules[path]){
                rules[path](request);
            }else{
                // 此处是针对 hashchange 事件得来的，如果手动修改的不仅仅是hash,那么不会走这个路由，就会是Not Found页面。
                alert(404);
            }
        },
        /* 对外提供一个增加路由的接口 */
        addRule:function (path,handler) {
            rules[path] = handler;
        }
    }
})