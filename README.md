## RIA技术基础


百度传课上的一期RIA基础教程，我把它整理成一个Demo。

- 具体课程链接：[http://www.chuanke.com/v2889565-165995-750156.html](http://www.chuanke.com/v2889565-165995-750156.html)
- 这个demo 只是一个RIA项目的雏形，如果开发还需要进一步的规划。

### version1.0 分支 
- 实现了通过location.hash的不同，进而设置路由，通过访问的路由的不同，去调度不同的功能。

### varsion2.0 分支 
- 进一步通过对location.hash不同参数来实现更细的功能。
    
### RIA => rich internet application  

rich 针对的是 client ，功能放在客户端来实现。

- RIA 特点 ： 1.大量的局部更新 (依赖js) 2. 异步数据加载 
- RIA 优点 ： 1.表现力丰富 2.反应更加迅速，网络效率更高。
- RIA 缺点 ： 1.开发复杂 2.首屏加载时间长 3.对搜索引擎的支持不友好。

SPA 就是 RIA技术的产物。
gmail 是 RIA应用的先驱。

### 开发环境的搭建

- nodejs环境
- 合适的编辑器
    * atom 社区推动的，版本也比价活跃。vscode 轻量且功能强大！
- edp webserver工具包
    * npm install -g edp edp-webserver edp-project
    * 然后找个目录来触发我们的项目
    * 分别执行命令 ` mkdir ria-base-demo`  `cd ria-base-demo`  `edp project init`  `ls` 我们就可以看到项目初始化结构了
- esl & jQuery的引入
    * esl 是一个amd的用于浏览器端的加载器
    * esl (Enterprise Standard Loader) github.com/ecomfe/esl
    * 在页面上引用esl.js 和 jquery.js
-  编写代码，调整页面结构，对功能模块进行整理
-  通过命令：edp webserver 启动服务器 ，复制地址到浏览器 浏览打开src/gallery

### 浏览状态的保持

通过hash 来保存。/#hashname 。 hash作为页面的一个标记，定位符，
除了hash能够提供这种状态保持的功能外。
html5的history api也能实现这种，但是IE678兼容不太好。
所以我们使用hashchange事件。

### 路由

路由： 把一个请求分发给它真正的处理函数。
我们需要构造一个数据结构来响应分发请求 -  路由表。