$(function(){
	$(".jewel_paging").find("a").each(function(index){
			$(this).click(function(){
				$(".image_reel1").css("left", -440 * index)
				$(this).css("border","2px solid #7e7e7e").siblings().css("border","1px solid #7e7e7e")
				$(".f1,.fr").css("border",0)
			})
		})
	
	$(".selected").click(function(){
		$(".w_01").css("display","block")
		$(".w_02").css("display","none")
		$(".jewel_paging").css("width",378)
		$(".image_reel1").css({"width":2180}).find("img").css("margin-left",86)
	})
	$(".se_01").click(function(){
		$(".w_01").css("display","none")
		$(".w_02").css("display","block")
		$(".jewel_paging").css("width",110)
		$(".image_reel1").css({"width":350,"left":0}).find("img").css("margin-left",97)
	})
	
	
	/***********选项卡***************/
	
	var timer = null;
	var num = 0;
	function play(){
		timer = setInterval(function(){
			num++;
			if( num >= 2 ){
				num = 0;
			}
			$(".picBox").find("ul").eq(num).css("display","block").siblings().css("display","none")
			$(".NNN").find("li").eq(num).css({"background":"#9d9d9d","color":"#fff"}).siblings().css({"background":"#fff","color":"#000"})
		},4000)
	}
	play();
	
	$(".hotPic").hover(function(){
		clearInterval(timer)
	},function(){
		play();
	})
	
	$(".cc").click(function(){

		$(".little_01").css("display","block").siblings().css("display","none")
			$(this).css({"background":"#9d9d9d","color":"#fff"}).siblings().css({"background":"#fff","color":"#000"})
		})
	
	$(".cur").click(function(){

		$(".little_02").css("display","block").siblings().css("display","none")
			$(this).css({"background":"#9d9d9d","color":"#fff"}).siblings().css({"background":"#fff","color":"#000"})
		})
})