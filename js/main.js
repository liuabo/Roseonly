//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery",
		"index" : "index"
	}
})
require(["jquery","index"],function($,index){
	$(function(){
		index.index();
	})
})
