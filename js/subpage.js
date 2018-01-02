define(function(){
	function subpage(){
				$(function() {
			//获取json
			$.getJSON("../json/subpage.json", function(data) {
				$.each(data, function(index, value) {
					$(".sub").append(
						`<li class="goodInfo" id=${value.data}>
							<div class="li_img">
							<a href="javascript:;">
								<img src=${value.img} alt="" style="display: inline;">
							</a>
							</div>
							<b class="f14">${value.brand}</b>
							<p class="f12">${value.introduce}</p>
							<b class="f13">${value.price}</b>
						</li>`
					);
				})
		
				$(".sub li").hover(function() {
					$(this).css("background", "#e5e5e5")
				}, function() {
					$(this).css("background", "#fff")
		
				})
				var arr = [];
				var str = [];
				var newArr = [];
				$.getJSON("../json/subpage.json",function(data){
					$.each(data,function(index,value) {
						str = `${value.price}`;
		//				alert(typeof str)
		//				console.log(str)
						for( var i = 0 ; i < str.length; i ++ ){
							arr =  str.replace("￥","");
		//					console.log(arr);
							for( var j = 0 ; j < arr.length; j++ ){
		//						alert(newArr instanceof Array)
		//						newArr.sort(function(a,b){return a - b;})
		//						console.log(newArr)
							}
						}
		//				console.log( arr.push(parseInt(str.push(`${value.price}`)) ) )
					});
				})
			
			
			
				/**********点击跳转***********/
				var timer = null;
				$(".sub").find("li:first").click(function(){
					location.href = "../detail/detail.html"
				})
			})
			
			
		})
	}
	return{
		subpage : subpage
	}
})
