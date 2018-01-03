//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"index" : "index",
		"comm" : "common",
		"reg" : "register"
	}
})
require(["jquery","cookie","index","comm","reg"],function($,cookie,index,comm,reg){
	$(function(){
		index.index();
		comm.comm();
		reg.register();
	})
})