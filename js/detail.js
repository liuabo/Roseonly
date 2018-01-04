define(function() {
	function detail() {
		$(function() {
			$(".jewel_paging").find("a").each(function(index) {
				$(this).click(function() {
					$(".image_reel1").css("left", -440 * index)
					$(this).css("border", "2px solid #7e7e7e").siblings().css("border", "1px solid #7e7e7e")
					$(".f1,.fr").css("border", 0)
				})
			})

			//	$(".selected").click(function(){
			//		$(this).attr("data-good-id=",sp1)
			//	})
			$(".selected").click(function() {
				$(this).attr("data-good-id", "sp1")
				$(".se_01").removeAttr("data-good-id")
				//		$(obj_div).attr('id',id_name);
				$(".w_01").css("display", "block")
				$(".w_02").css("display", "none")
				$(".jewel_paging").css("width", 378)
				$(".image_reel1").css({
					"width": 2180
				}).find("img").css("margin-left", 86)
			})
			$(".se_01").click(function() {
				$(this).attr("data-good-id", "sp1")
				$(".selected").removeAttr("data-good-id")
				$(".w_01").css("display", "none")
				$(".w_02").css("display", "block")
				$(".jewel_paging").css("width", 110)
				$(".image_reel1").css({
					"width": 350,
					"left": 0
				}).find("img").css("margin-left", 97)
			})

			/***********选项卡***************/

			var timer = null;
			var count = 0;

			function play() {
				timer = setInterval(function() {
					count++;
					if(count >= 2) {
						count = 0;
					}
					$(".picBox").find("ul").eq(count).css("display", "block").siblings().css("display", "none")
					$(".NNN").find("li").eq(count).css({
						"background": "#9d9d9d",
						"color": "#fff"
					}).siblings().css({
						"background": "#fff",
						"color": "#000"
					})
				}, 4000)
			}
			play();

			$(".hotPic").hover(function() {
				clearInterval(timer)
			}, function() {
				play();
			})

			$(".cc").click(function() {

				$(".little_01").css("display", "block").siblings().css("display", "none")
				$(this).css({
					"background": "#9d9d9d",
					"color": "#fff"
				}).siblings().css({
					"background": "#fff",
					"color": "#000"
				})
			})

			$(".cur").click(function() {

				$(".little_02").css("display", "block").siblings().css("display", "none")
				$(this).css({
					"background": "#9d9d9d",
					"color": "#fff"
				}).siblings().css({
					"background": "#fff",
					"color": "#000"
				})
			})

			//购物车
			loadCart();

			//给购物车按钮加一个点击事件
			$("#buy").click(function() {
				location.href = "../shop/shop.html";
			})
			//给加入购物车按钮添加点击事件
			$(".button_bar2").click(function(e) {

				//获取商品的id（用来区分不同的商品）
				var goodId = $(".p-choose img").attr("data-good-id");
				//获取商品的名称
				var goodName = $(".right_tit").html();
				//获取商品的价格
				var goodPrice = $(".right_pay").find("em").html();
				console.log(goodPrice)
				//获取商品的图片src
				var goodSrc = $(".p-choose img").attr("src");
				//获取cookie中的信息
				//如果cookie中没有信息会返回一个undefined ,我所须是一个字符串类型的数据，所以将它转成一个“”空字符串。保持数据类型一致。
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
				//将字符串转成对象
				var cartObj = convertCartStrToObj(cartStr);
				//判断该商品是否已经在购物车中存在
				if(goodId in cartObj) {
					//如果已存在，那么该商品的数量加1
					cartObj[goodId].num += 1;
				} else {
					//如果不存在，那么将新商品的信息存入
					cartObj[goodId] = {
						name: goodName,
						price: goodPrice,
						num: 1,
						src: goodSrc
					};
				}

				//将新的购物车信息存回cookie
				//将对象转为字符串
				cartStr = convertObjToCartStr(cartObj);
				//存入cookie
				//document.cookie = "key=value"
				$.cookie("cart", cartStr, {
					expires: 7,
					path: "/"
				});

				//做一个飞入购物车的效果
				var cloneImg = $(".p-choose img").clone().css({
					width: 100,
					height: 100
				});

				cloneImg.fly({
					start: {
						top: e.clientY,
						left: e.clientX
					},
					end: {
						top: $("#buy").offset().top,
						left: $("#buy").offset().left,
						width: 0,
						height: 0
					},
					autoPlay: true,
					onEnd: function() {
						$("#buy").html(function(index, v) {
							//"购物车（0）"
							var pattern = /(\d+)/;
							var num = parseInt(v.match(pattern)[1]);
							//					alert(num)
							return "购物车(" + cartObj[goodId].num + ")";
						});
						$(".list_03").html(function(index, v) {
							//"购物车（0）"
							var pattern = /(\d+)/;
							var num = parseInt(v.match(pattern)[1]);
							//					alert(num)
							return "购物车(" + cartObj[goodId].num + ")";
						});
						cloneImg.remove();
					}
				})
				var timer = null;
				timer = setInterval(function() {
					location.href = "../shop/shop.html";
				}, 200)
			})

			function convertCartStrToObj(cartStr) {
				//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
				//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
				if(!cartStr) {
					return {};
				}
				var goods = cartStr.split(":");
				var obj = {};
				for(var i = 0; i < goods.length; i++) {
					var data = goods[i].split(",");
					//以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
					obj[data[0]] = {
						name: data[1],
						price: parseFloat(data[2]),
						num: parseInt(data[3]),
						src: data[4]
					}
				}
				return obj;
			}

			function convertObjToCartStr(obj) {

				var cartStr = "";
				//遍历对象
				for(var id in obj) {
					if(cartStr) {
						cartStr += ":";
					}
					//"sp1,香蕉,30,1,src1:sp2,苹果,40,2,src2:sp3,梨,50,3,str3"
					cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
				}
				return cartStr;
			}

			//加载购物车中的信息（使商品页与购物车页中的购物车数量同步）
			function loadCart() {
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
				var cartObj = convertCartStrToObj(cartStr);
				//获取到购物车中所有商品的数量
				var total = 0;
				for(var id in cartObj) {
					total += cartObj[id].num;
				}
				$("#buy").html("购物车(" + total + ")");
				$(".list_03").html("购物车(" + total + ")");
			}
		})
	}
	return {
		detail : detail
	}
})