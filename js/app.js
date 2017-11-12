require.config({
	//简化路径
	paths:{
		// 加载文件
		"zepto":"lib/zepto",
		"underscore":"lib/underscore",
		"backbone":"lib/backbone",
		"zepto.touch":"lib/zepto.touch"
	},
	shim:{
		"zepto":{
			exports:"Zepto"
		},
		"zepto.touch":{
			deps:["zepto"],
			exports:"Zepto"
		}
	},
	//css配置文件
	map:{
		"*":{
			"css":"lib/css"
		}
	}
})
require(["route/route","css!reset.css"],function(route){
	//启动路由
	route();
})