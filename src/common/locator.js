/*
    locator 模块用于hashchange事件
*/

define(function (require) {
    return {
        /* 启动hashchange 的事件监听 */
        start:function(handler){
            if(handler){
                window.onhashchange = handler;
                handler();
            }
        },
        /* 停止hashchange 的事件监听 */
        stop:function () {
            window.onhashchange = null;
        }
    }
})