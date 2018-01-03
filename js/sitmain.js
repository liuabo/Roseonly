//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery",
		"index" : "index",
		"comm" : "common",
		"sit" : "site"
	}
})
require(["jquery","index","comm","sit"],function($,index,comm,sit){
	$(function(){
		index.index();
		comm.comm();
		sit.sit();
	})
})