//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"fly" : "jquery.fly",
		"index" : "index",
		"comm" : "common",
		"detail" : "detail"
	}
})
require(["jquery","cookie","fly","index","comm","detail"],function($,cookie,fly,index,comm,detail){
	$(function(){
		index.index();
		comm.comm();
		detail.detail();
	})
})
