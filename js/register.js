define(function() {
	function register() {
		$(function() {
			$("#countryPrefixs option").click(function() {
				var $va = $(this).val();
				$("#prefixC").html($va)
			})

			$("#registerSubmit").hover(function() {
				$(this).css("background", "#83847E")
			})

			//验证码
			function yzm() {
				var arr = []; //存放验证码
				for(var i = 0; i < 4; i++) {
					var code = getRand(0, 9);
					arr.push(code);
				}
				return arr.join("");
			}
			$("#yzm").html(yzm())
			$(".register_yzmnext").click(function() {
				$("#yzm").html(yzm())
			})

			function getRand(min, max) {
				return Math.round(Math.random() * (max - min) + min);
			}
			$("#getSmsCode").click(function(){
				$("#smscode").val(yzm())
			})
			//手机号

			$("input").focus(function() {
				$(this).css("border", "2px solid #b3b3b3")
			})
			$("input").blur(function() {
				$(this).css("border", "1px solid #b3b3b3")
			})
			var flagTel = null;
			$("#username").blur(function() {
				var str = $("#username").val();
				var reg = /^1[45378]\d{9}$/;
				//console.log(str);
				if(reg.test(str)) {
					flagTel = true;
					$(".s1").css("display", "none").html("")
				} else {
					flagTel = false;
					$(".s1").css("display", "block").html("请填写正确的手机号")
				}
			})

			//验证码
			var flagYzm = null;
			$("#rand_yzm").blur(function() {
				if($(this).val() == "") {
					flagYzm = false;
					$(".s2").css("display", "block").html("请输入4位图片验证码")
				} else if($("#rand_yzm").val() != $("#yzm").html()) {
					flagYzm = false;
					$(".s2").css("display", "block").html("请输入4位图片验证码")
				} else {
					flagYzm = true;
					$(".s2").css("display", "none").html()
				}

			})

			//密码
			var flagPwd = null;
			$("#password").blur(function() {
				var reg = /^\w{6,12}$/;
				var str = $("#password").val();
				if(reg.test(str)) {
					flagPwd = true;
					$(".s3").css("display", "none").html()
				} else {
					flagPwd = false;
					$(".s3").css("display", "block").html("密码长度为6~16个字符")
				}
			})

			//cookie
			$("#password").blur(function() {
				if(flagTel && flagYzm && flagPwd) {
					$("#registerSubmit").css("background", "#414141");
					$("#registerSubmit").click(function() {
						//				var id = new Date().getTime()
						//				var date = new Date();
						var id = new Date().getTime()
						var userName = $('#username').val()
						var userId = $('#password').val()

						var cookieValue = '{"user":' + userName + ',"userId":' + userId + "}"
						var cookieKey = "user_" + id;
						var date = new Date();
						date.setDate(date.getDate() + 3);
						document.cookie = cookieKey + '=' + cookieValue + ";expires=" + date + ";path=/";
						//				$.cookie(cookieKey, cookieValue, { expires: 7, path: '/' });
						alert("注册成功");
						var timer = setInterval(function() {
							location.href = "../index.html";
						}, 1000)

					})
				}
			})
		})
	}
	return {
		register : register
	}
})