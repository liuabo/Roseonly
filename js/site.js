define(function() {
	function sit() {
		$(function() {
			/**************点击设置收货地址显示**************/
			$(".cor-2").click(function() {
				$(".sss").css("display", "block")
			})
			var index = $(".cor-2").find("input")
			//	alert( typeof index )
			$.each(index, function() {

			});
			$(".save").click(function() {
				var $index = $(".cor-2 input").eq(index).find("input");
				console.log($index)
				if($($index).val() == "") {
					$($index).css("border", "1px solid #f00")
					//			alert( $("input").val() )
				}
			})

			var provArr = ["北京", "天津", "上海", "重庆"];
			var cityArr = [
				["北京"],
				["天津市"],
				["上海市"],
				["重庆市"]
			];
			var countyArr = [
				[
					["东城区", "西城区"]
				],
				[
					["和平区", "河东区", "河西区", "南开区", "河北区"]
				],
				[
					["浦东区", "徐汇区", "长宁区", "静安区", "普陀区", "虹口区", "杨浦区"]
				]
			]

			//页面打开后 将省的信息添加到对应的下拉列表
			for(var i = 0; i < provArr.length; i++) {
				$("#prov").append("<option value=" + i + ">" + provArr[i] + "</option>")
			}

			//为省的下拉列表添加一个改变事件 改变省 获取对应的市
			$("#prov").change(function() {
				//再次改变之前清空市的信息
				//$("#city").empty();

				$("#city")[0].length = 1;
				//保留市中的第一个option  js的length属性可读写，而jquery中的length属性不可以该写，所以将jquery元素转成js元素

				//alert( $(":selected").index() );
				//index = $(":selected").index() - 1;
				var index = $(this).val(); //省的下标  
				var city = cityArr[index]; //某个被选择的省对应的市  一维数组

				for(var i = 0; i < city.length; i++) {
					$("#city").append("<option value='" + index + "_" + i + "'>" + city[i] + "</option>")
				}
			})
			//为市添加一个改变事件  获取对应的县
			$("#city").change(function() {
				$("#county")[0].length = 1;
				var str = $(this).val(); //省和市的下标
				var arr = str.split("_");
				var provIndex = arr[0];
				var cityIndex = arr[1];
				var county = countyArr[provIndex][cityIndex];
				for(var i = 0; i < county.length; i++) {
					$("#county").append("<option>" + county[i] + "</option>")
				}
			})
			var flagTel = null;
			$("#mobile").blur(function() {
				var str = $("#mobile").val();
				var reg = /^1[345678]\d{9}$/;
				if(reg.test(str)) {
					flagTel = true;
					$("#mobile").css("border", "1px solid green")
				} else {
					flagTel = false;
					$("#mobile").css("border", "1px solid red")
				}
			})

			flagZip = null;
			$("#zip").blur(function() {
				var str = $("#zip").val()
				var reg = /^[1-9][0-9]{5}$/;
				if(reg.test(str)) {
					flagZip = true;
					$("#zip").css("border", "1px solid green")
				} else {
					flagZip = false;
					$("#zip").css("border", "1px solid red")
				}
			})
			$(".save").click(function() {
				if(flagTel && flagZip && $("select").html()) {
					$(".sss").hide()
					$(".save,.cancel").hide()
					$("#lb p").html($("#contactname").val() + "&nbsp;&nbsp;" + "&nbsp;&nbsp;" + "手机" + $("#mobile").val() + "&nbsp;&nbsp;" + $("#address").val() + "&nbsp;&nbsp;" + $("#address").val())
				} else {
					alert("请检查输入信息")
				}
			})
		})
	}
	return {
		sit: sit
	}
})