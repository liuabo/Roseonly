//创建cookie 

function createCookie(key, value, expires) {
	//主键值对
	var cookieText = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";path=/";
	//判断生存期是否是num类型
	if(typeof expires == "number") {
		var date = new Date();
		date.setDate(date.getDate() + expires);
		cookieText += ";expires=" + date;
	}
	document.cookie = cookieText;
}

//取cookie

function getCookie(key) {
	var cookies = document.cookie.split("; ");
	for(var i = 0; i < cookies.length; i++) {

		var cookieValue = cookies[i].split("=");
		if(encodeURIComponent(key) == cookieValue[0]) {
			return decodeURIComponent(cookieValue[1]);
		}
	}
}

//删除cookie

function removeCookie(key){
	document.cookie = encodeURIComponent(key) + "=;expires=" + new Date(0) + ";path=/";
}
