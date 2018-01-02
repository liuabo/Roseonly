//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"fly" : "jquery.fly",
		"comm" : "common",
		"index" : "index",
		"subpage" : "subpage"
 	}
})
require(["jquery","cookie","fly","comm","index","subpage"],function($,cookie,fly,comm,index,subpage){
	$(function(){
		comm.comm();
		index.index();
		subpage.subpage();
	})
})