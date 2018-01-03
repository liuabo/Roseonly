define(function() {
	function subpage() {
		$(function() {
			//获取json
			$.getJSON("../json/subpage.json", function(data) {
				$.each(data, function(index, value) {
					$(".sub").append(
						`<li class="goodInfo clear" id=${value.data}>
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
				//				var arr = [];
				//				var str = [];
				//				var newArr = [];
				//				$.getJSON("../json/subpage.json",function(data){
				//					$.each(data,function(index,value) {
				//						str = `${value.price}`;
				//		//				alert(typeof str)
				//		//				console.log(str)
				//						for( var i = 0 ; i < str.length; i ++ ){
				//							arr =  str.replace("￥","");
				//		//					console.log(arr);
				//							for( var j = 0 ; j < arr.length; j++ ){
				//		//						alert(newArr instanceof Array)
				//		//						newArr.sort(function(a,b){return a - b;})
				//		//						console.log(newArr)
				//							}
				//						}
				//		//				console.log( arr.push(parseInt(str.push(`${value.price}`)) ) )
				//					});
				//				})

				var list = $(".sub li");
				//			console.log(list)
				var arr = [];
				var zindex = 1;
				for(var i = 0; i < list.length; i++) {
					arr.push({
						"left": list[i].offsetLeft,
						"top": list[i].offsetTop
					});
				}
				for(var i = 0; i < list.length; i++) {
					list[i].style.position = "absolute";
					list[i].style.left = arr[i].left + "px";
					list[i].style.top = arr[i].top + "px";
					list[i].style.margin = 0;
				}
				for(var i = 0; i < list.length; i++) {
					list[i].index = i; //为每一个li添加一个index属性  记录下标  这个下标就和数组下标  对应
					//		drag( list[i] );//每一张图片都可以拖拽
				}
				//随机排序
				$(".order").click(function() {
					$(this).css("border-bottom","9px solid #414141").siblings().css("border-bottom",0)
//					alert(1)
					var arrIndex = [3, 2, 6, 8, 0, 1, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 21, 23, 24, 25, 27, 26, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, ]; //存放九个li的下标
					//arr[arrIndex[i]].left
					//每一次点击 都打乱 arrIndex的下标位置
					arrIndex.sort(function() {
						return Math.random() - 0.5;
					})

					//每一张图片都运动
					for(var i = 0; i < list.length; i++) {
						startMove(list[i], {
							"left": arr[arrIndex[i]].left,
							"top": arr[arrIndex[i]].top
						})
						list[i].index = arrIndex[i];
					}
				})
				$(".zh").click(function(){
					$(this).css("border-bottom","9px solid #414141").siblings().css("border-bottom",0)
//					alert(1)
					$(".sub li").css("position","")
				})

				/**********点击跳转***********/
				var timer = null;
				$(".sub").find("li:first").click(function() {
					location.href = "../detail/detail.html"
				})
			})

		})
	}
	return {
		subpage: subpage
	}
})