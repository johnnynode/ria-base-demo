/*
    控制路由的中转功能，页面的不同跳转
 */
define(function(){
   return {
       parse:function(hash) {
           /* 这里我们设置的路由规则是参数用&连接 */
           /* 例如 ：#/settings&do=time  */
           if(!hash){
               return console.log('hash is necessary!');
           }
           var path = hash.match(/^#\/(\w+)/)[0].slice(2); 
           var index = hash.indexOf('&');
           var tempArr = hash.slice(index+1).split('&');
           var query = {};
           tempArr.forEach(function(item){
               var arr = item.split('=');
               query[arr[0]] = arr[1];
           });   
           return {
               path:path,
               query:query
           }
       }
   } 
});