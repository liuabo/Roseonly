//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery",
		"index" : "index",
		"comm" : "common"
	}
})
require(["jquery","index","comm"],function($,index,comm){
	$(function(){
		index.index();
		comm.comm();
	})
})
