//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"comm" : "common",
		"index" : "index",
		"login" : "login"
 	}
})
require(["jquery","cookie","comm","index","login"],function($,cookie,comm,index,login){
	$(function(){
		comm.comm();
		index.index();
		login.login();
	})
})