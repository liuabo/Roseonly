//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"index" : "index",
		"comm" : "common",
		"shop" : "shop"
	}
})
require(["jquery","cookie","index","comm","shop"],function($,cookie,index,comm,shop){
	$(function(){
		index.index();
		comm.comm();
		shop.shop();
	})
})