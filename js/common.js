define(function() {
	function comm() {
		$(function() {
			$(".reg_04").click(function(){
				location.href = "../log in/login.html"
			})
			$(".reg_05").click(function(){
				location.href = "../log in/login.html"
			})
			$(window).scroll(function() {
				let h = 120;
				var sTop = document.body.scrollTop || document.documentElement.scrollTop;
				if(sTop > h) {
					$("#nav_cn").css({
						"position": "fixed",
						"z-index": 3000,
						"top": 0,
					});
					$("#nav ul li").css({
						"margin-left": 14,
						"margin-right": 14
					});
					$(".list_01").css("display", "block");
					$(".nav_05").css("display", "block")
				} else if(sTop < h) {
					$("#nav_cn").css({
						"position": ""
					});
					$("#nav ul li").css({
						"margin-left": 32,
						"margin-right": 32
					});
					$(".list_02").css("margin-left", 0);
					$(".list_01").css({
						"display": "none",
						"margin-left": 10
					});
					$(".nav_05").css("display", "none")
				}
			})

			/*************下拉菜单*******************/
			$("#nav ul li").hover(function() {
				$(this).find("div").css({
					"display": "block"
				});
			}, function() {
				$(this).find("div").css({
					"display": "none"
				});
			})

			/*****************返回顶v不***********************/
			$(".fot_01").hover(function() {
				$(this).css("background", "#414141")
			}, function() {
				$(".fot_01").css("background", "#969696")
			})
			$(".list_05").hover(function() {
				$(".tel_icon").css("display", 'block')
			}, function() {
				$(".tel_icon").css("display", 'none')
			})
			$(".list_06").hover(function() {
				$(this).find("img").eq(1).css("display", "block")
			}, function() {
				$(this).find("img").eq(1).css("display", "none")
			})

			$(".list_07").click(function() {
				$(window).load(function() {
					$(this).animate({
						"scrollTop": 0
					}, 1000)
				})
			})

			// 触发滚动条时   显示小火箭

			$(window).scroll(function() {
				sTop = document.body.scrollTop || document.documentElement.scrollTop;
				if(sTop > 200) {
					$(".list_07").css("display", "block");
				} else {
					$(".list_07").click(function() {
						$("body").animate({
							"scrollTop": 0
						}, 5000);
					})
					$(".list_07").css("display", "none");
				}
			})

			//	var cloneDiv = $(".head-right ul").clone()
			//	cloneDiv.appendTo($(".nav_05"))
			// 触发滚动条时   显示小火箭
			$(window).scroll(function() {
				sTop = document.body.scrollTop || document.documentElement.scrollTop;
				if(sTop > 200) {
					$(".list_07").css("display", "block");
				} else {
					$(".list_07").click(function() {
						document.body.scrollTop = document.documentElement.scrollTop = 0;
						$(".list_07").css("display", "none");
					})
				}
			})
		})
	}
	return {
		comm : comm
	}
})