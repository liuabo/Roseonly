define(function() {
	function index() {
		$(function() {
			/********轮播图*********/
			let count = 0;
			$(".paging .list_04").css({
				"background-positionY": -6
			});
			var timer = '';

			function play() {
				timer = setInterval(function() {
					count++;
					if(count >= 5) {
						count = 0;
					}
					//		console.log(count);
					$(".car_cn").stop().animate({
						"left": -1240
					}, 1000, function() {
						$(this).css("left", 0)
						$(this).find("li:first")
							.appendTo($(".car_cn"));
					});
					$(".paging span").eq(count).css({
							"background-positionY": -6
						})
						.siblings()
						.css({
							"background-positionY": 0
						});
				}, 3000)
			}
			play();

			$(".car_cn img").hover(function() {
				clearInterval(timer)
				$(".btn_l").css({
					"display": "block"
				});
				$(".btn_r").css({
					"display": "block"
				});
			}, function() {
				play();
				$(".btn_l").css({
					"display": "none"
				});
				$(".btn_r").css({
					"display": "none"
				});
			})
			$("#b_l").hover(function() {
				$(".btn_l").css("display", "block");
				$(this).css({
					"backgroundPositionX": 0
				})
			}, function() {
				$(".btn_r").css("display", "block");
				$(this).css({
					"backgroundPositionX": -84
				})
			});
			$("#b_r").hover(function() {
				$(".btn_r").css("display", "block");
				$(this).css({
					"backgroundPositionX": -42
				})
			}, function() {
				$(".btn_r").css("display", "block");
				$(this).css({
					"backgroundPositionX": -126
				})
			});
			var index = 0;
			$("#b_r").click(function() {
				clearInterval(timer);
				index++;
				if(index >= 5) {
					index = 0;
				}
				$(".car_cn").stop().animate({
					"left": -1240
				}, 1000, function() {
					$(this).css("left", 0)
					$(this).find("li:first")
						.appendTo($(".car_cn"));
				});
				$(".paging span").eq(index).css({
						"background-positionY": -6
					})
					.siblings()
					.css({
						"background-positionY": 0
					});
			})
			var index = 5;
			var flag = true;
			$("#b_l").click(function() {
				clearInterval(timer);
				index--;
				loading();
				if(index <= 0) {
					count = 0;
				}

				function loading() {
					flag = true;
					$(".car_cn").css({
							"left": -1240
						})
						.find("li:last")
						.prependTo($(".car_cn"));

					$(".car_cn").animate({
						"left": 0
					}, 1000);
					$(".paging span").eq(index).css({
							"background-positionY": -6
						})
						.siblings()
						.css({
							"background-positionY": 0
						});
				}
			})

			/************选项卡*************/
			let num = 0;
			var timer1 = "";

			function autoPlay() {
				timer1 = setInterval(function() {
					num++;
					if(num >= 5) {
						num = 0;
					}
					//		console.log(num);
					$(".num_cn li").find("div").eq(num).css("display", "block");
					$(".num_cn li")
						.eq(num)
						.css({
							"border-right": "1px solid #000",
							"border-left": "1px solid #000",
							"border-top": "2px solid #000",
							"border-bottom": 0
						})
						.siblings().css({
							"border": "0 solid rgb(65, 65, 65)",
							"border-bottom": "1px solid #000"
						})
						.find("div")
						.css({
							"display": "none"
						});
				}, 2000)
			}
			autoPlay();
			$(".num_cn li").hover(function() {
				clearInterval(timer1)
				$(this).find("div")
					.css("display", "block").parent().css({
						"border-right": "1px solid #000",
						"border-left": "1px solid #000",
						"border-top": "2px solid #000",
						"border-bottom": 0
					}).siblings().css({
						"border": "0 solid rgb(65, 65, 65)",
						"border-bottom": "1px solid #000"
					}).find("div")
					.css("display", "none")

			}, function() {
				autoPlay();
			})
			/**************小列表*******************/
			$(".brand dl dt").hover(function() {
				$(this).css("overflow", "hidden");
				$(this).find("img")
					.css({
						"transform": "scale(1.1)",
						"transition": "all 0.3s"
					})
			}, function() {
				$(this).css({
					"transition": "all 3"
				})
				$(this).find("img").animate({
						"transform": "scale(1)",
						"transition": "all 0.3s"
					})
					.css({
						"transform": "scale(1)"
					})
			})
			$(".Pic a").hover(function() {
				$(this).css({
					"background": "#ccc",
					"transition": "all 0.3s"
				})
			}, function() {
				$(this).animate({
					"opacity": 1
				}, 1000)
				$(this).css({
					"background": "",
					"transition": "all 0.3s"
				})
			})
			$("#roseOnly img").hover(function() {
				$(this).animate({
					"opacity": 0.3
				})
			}, function() {
				$(this).animate({
					"opacity": 1
				})
			})
			$(".eg img").hover(function() {
				$(this).animate({
					"opacity": 0.3
				})
			}, function() {
				$(this).animate({
					"opacity": 1
				})
			})

			var str = document.cookie.split("; ");
			//			console.log(str)
			for(var i = 0; i < str.length; i++) {
				var arr = str[i].split("=");
				//			console.log(arr);
				for(var j = 0; j < arr.length; j++) {
					if(arr[0].indexOf("user_") == 0) {
						var json = eval("(" + arr[1] + ")")
						var $userId = json.user
						var $userPass = json.userId
						$(".reg_01").css("width", 60).html("个人中心")
						$(".reg_02").css("display", "none")
						$(".reg_03").html("退出")
					}
				}
			}

			$(".reg_02").click(function() {
				var timer = setInterval(function() {
					location.href = "../log in.html";
				}, 1000)
			})

		})
	}
	return {
		index : index
	}
})