$(function(){
	$("#countryPrefixs option").click(function() {
		var $va = $(this).val();
		$("#prefixC").html($va)
	})
	
	//手机号验证
	var flagUser = null;
	$("#username").blur(function(){
		var str = $("#userN").val()
		var reg = /^1[45378]\d{9}$/;
		if( reg.test(str) ){
			flagUser = true;
		}else{
			flagUser = false;
		}
	})
	
	//密码
	var flagPwd = null;
	$("#psd").blur(function() {
		var reg = /^\w{6,12}$/;
		var str = $("#password").val();
		if(reg.test(str)) {
			flagPwd = true;
		} else {
			flagPwd = false;
		}
	})
	
	
	
	//获取登录cookie
	var str = document.cookie.split("; ");
		//			console.log(str)
		for(var i = 0; i < str.length; i++) {
			var arr = str[ i].split("=");
			//			console.log(arr);
			for(var j = 0; j < arr.length; j++) {
				if(arr[0].indexOf("user_") == 0) {
					var json = eval( "(" + arr[1] + ")" )
					var $userId = json.user
					var $userPass = json.userId
					$("#userN").val($userId)
					$("#psd").val($userPass)
				}
			}
		}
		var flagVer = null;
		if( $("#userN").val() == $userId && $("#psd").val() == $userPass ){
			flagVer = true;
		}else{
			flagVer = false;
		}
			$("#login-btn-submit").click(function(){
			if( flagUser && flagPwd && flagVer ){
			$(".s4").css("display","none").html()
			alert("登陆成功");
					var timer = setInterval(function() {
						location.href = "../index.html";
					}, 1000)
		}else{
			$(".s4").css("display","block").html("请填写正确的手机/邮箱")
		}
	})
})