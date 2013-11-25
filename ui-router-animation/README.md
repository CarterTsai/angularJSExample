ui-router 介紹
--------------
References:    
1. [ui-router][1]    
2. [from egghead.io][2]


## Router config

以下是Router基本的設定


```
myApp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('index', {
      		url: "", // url空白的話就是根目錄就像是執行http://localhost一樣
      		templateUrl: "partials/state1.html"
    	});
```



[1]: https://github.com/angular-ui/ui-router "ui-router"
[2]: http://egghead.io/lessons/angularjs-introduction-ui-router "from egghead.io"
