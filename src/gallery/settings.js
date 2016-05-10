/* 
    这里是设置的业务逻辑
 */
define(function () {
    return function (request){
        var query = request.query;
        // 针对query的不同，做不同的处理。下面只是模拟一下。
        /* 访问对象中的属性和值 */
        var output = '';
        for(var k in query) {
            output += '这里简单模拟一下：所要求提供的参数名称是'+k+'，参数值是' + query[k]; 
        }
        $('#app').html(output);
    }
})