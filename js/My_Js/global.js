//﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉
//  此区域的代码为全局公共JS。请不要直接修改该区域中的任何代码,或在该区域中添加任何自定义代码
//  该区域大部分函数和代码库块都是以该项目实现为目标所开发的。复用性和实效性较低。请维修人员谅解
//﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍﹍


/*
                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         佛祖保佑       永无BUG
*/


//╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣ Mui全局配置  ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣

mui.init({

	swipeBack: false,

	gestureConfig: {
		tap: true, //默认为true
		doubletap: true, //默认为false
		longtap: true, //默认为false 
		swipe: true, //默认为true
		drag: true, //默认为true
		hold: true, //默认为false，不监听
		release: true //默认为false，不监听
	}
});


//╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣ 公共加载模块  ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
$(function() {
	Init_初始化();

	assistive_mTouch(); //小光点以及菜单

	QQ_offCanvas(); //QQ侧滑菜单	

	quit(); //退出登录
})





//╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣ 计算器大小监视 ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣

calculator_winresize = function(e) {
	$(window).resize(function() {

		Init_初始化();

		if (Lee.xs_超小屏幕如所有手机小于768px()) {
			$("#calculator").autoheight({
				n: 12,
				m: "height"
			});
			$(".jcalculator").hide();
			计算器_autolineheight();
		}
		if (Lee.sm_小屏幕如ipad平板大于等于768px()) {
			e.calculator();
			$(".jcalculator").css({
				"top": "40px",
				"height": "200px",
				"width": "200px",
				"line-height": "50px",
				"right": "0",
				"display": "none",
				"z-index": "9999"
			});
		}
	})
}




// <summary>
// Init_初始化
// </summary>
Init_初始化 = function() {
	$("#mui-content").height(Get_获取容器高度()).css({
		"overflow": "hidden"
	}); //固定高度	




	window.onorientationchange = function() {
		switch (window.orientation) {
			case -90:
			case 90:
				// alert("横屏:" + window.orientation);
				$("#mui-content").height(Get_获取容器高度()).css({
					"overflow": "hidden"
				}); //固定高度	
			case 0:
			case 180:
				//  alert("竖屏:" + window.orientation);
				$("#mui-content").height(Get_获取容器高度()).css({
					"overflow": "hidden"
				}); //固定高度	
				break;
		}
	}


	//var wv = plus.webview.currentWebview();
	// 关闭侧滑返回功能
	//wv.setStyle({'popGesture':'none'});
	// 侧滑返回后关闭webview
	//wv.setStyle({'popGesture':'close'});
	// 侧滑返回后隐藏webview
	//wv.setStyle({'popGesture':'hide'});

	//	plus.webview.currentWebview().setStyle({
	//                      'popGesture': 'none'
	// });  


	var username = localStorage.登录帐号;

	if (typeof(username) == "undefined" || username == "undefined") {
		alert("请先登录账户");
		mui.openWindow({
			url: "login.html",
			id: "login"
		});
		return;
	} else {
		$("#username").text(username);
	}

}




// <summary>
// Get_获取容器高度
// </summary>
Get_获取容器高度 = function() {
	var a = $("#header").height(); //头部高度
	var b = $("#footer").height(); //脚步高度
	var c = $(window).height(); //整体高度
	var d = $(window).height(); //整体宽度
	var e = d - a - b; //容器高度

	return e;
}






// <summary>
// 窗体的高度通常是自增长的。所以该类适应的场景是高度不变的容器内
// </summary>
// <param name="e">对象</param>
$.fn.autoheight = function(opt) {
	return this.each(function() {

		var defaults = {
			m: "padding", //场景模式,包括margin模式，padding模式，height模式
			n: 12 //比例
		};

		//opt中如果存在defaults中的值，则覆盖defaults中的值 
		opt = $.extend(defaults, opt);

		var model = opt.m; //string,场景模式
		var self = $(this); //obj,目标对象
		var all_height = Get_获取容器高度(); //所在容器整体高度
		var self_height = parseInt(self.innerHeight()); //int,目前高度							
		var target_height = parseInt(opt.n * (all_height / 12)); //int,目标高度

		//console.log(all_height);


		if (self_height >= target_height) {
			self.css({
				"box-sizing": "border-box",
				"height": target_height / all_height * 100 + "%"
			}); //如果目标是变得比原来更小，那么就直接变好了
		} else {
			var value = parseInt((target_height - self_height) / 2); //int

			//alert(self_height + "," + target_height + "," +value + "," + h); 

			if (model == "padding") {
				var extrapadding = parseInt(self.innerHeight()) - parseInt(self.height());
				self.css({
					//					"padding-top": (value + extrapadding / 2) / all_height * 100 * 2 + "%",
					//					"padding-bottom": (value + extrapadding / 2) / all_height * 100 * 2 + "%"
					"padding-top": (value + extrapadding / 2),
					"padding-bottom": (value + extrapadding / 2)
				});

				var now_height = self.height();
				var extra = (now_height - self_height) / 2;
				if (extra > 0)
					self.css({
						//						"padding-top": (value - extra) / all_height * 100 * 2 + "%",
						//						"padding-bottom": (value - extra) / all_height * 100 * 2 + "%"
						"padding-top": (value - extra),
						"padding-bottom": (value - extra)
					});
			}

			if (model == "margin") {
				self.css({
					//					"margin-top": value / all_height * 100 * 2 + "%",
					//					"margin-bottom": value / all_height * 100 * 2 + "%"
					"margin-top": value,
					"margin-bottom": value
				});
			}

			if (model == "height") {
				self.css({
					"box-sizing": "border-box",
					//"height": value * 2
					"height": ((value * 2) / all_height * 100) + "%"
				});
			}
		}
	})
}


// <summary>
// 计算器line-height自适应高度差
// </summary>
计算器_autolineheight = function() {
	var height = Get_获取容器高度() / 4;
	$("#calculator span").css("line-height", height + "px");




	$("#calculator .calculator span").bind('tap', function() {
		if ($('input:focus').length == 0) {
			layer.tips("请先选择输入框", $("#money,#yard"), {
				tipsMore: true,
				time: 4000,
				tips: [1, '#000'],
			})
			layer.tips("请先选择输入框", $("#yard"), {
					tipsMore: true,
					time: 4000,
					tips: [3, '#000'],
				})
				//alert("请先聚焦输入框");
			return false;
		}

		var text = $(this).text();

		if (text != "C" && text != "提交") {
			var v = $('input:focus').val();
			$('input:focus').val(v + text);
		}

		if (text == "C") {
			$('input:focus').val('');
		}

		if (text == "提交") {
			layer.confirm('你确定要提交订单吗？', {
				btn: ['确定', '取消'] //按钮
			}, function() {

				// $("form").submit();

			}, function() {
				layer.closeAll();
			});
		}
	})

}


// <summary>
// 当窗口大于等于992px时，点击money窗口会弹出计算器 
// </summary>
money_click = function() {

	$("#money").click(function() {
		if (Lee.md_中等屏幕如桌面大于等于992px()) {


		}
	})
}





// <summary>
// 时间Javascript类库
// </summary>
Date.prototype.format = function(format) {
	var o = {
		"M+": this.getMonth() + 1, //month
		"d+": this.getDate(), //day
		"h+": this.getHours(), //hour
		"m+": this.getMinutes(), //minute
		"s+": this.getSeconds(), //second
		"q+": Math.floor((this.getMonth() + 3) / 3), //quarter
		"S": this.getMilliseconds() //millisecond
	}
	if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1,
				RegExp.$1.length == 1 ? o[k] :
				("00" + o[k]).substr(("" + o[k]).length));
	return format;
}



/*
1、< 60s, 显示为“刚刚”
2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
*/
function timeFormat(time) {
	var date = new Date(time),
		curDate = new Date(),
		year = date.getFullYear(),
		month = date.getMonth() + 10,
		day = date.getDate(),
		hour = date.getHours(),
		minute = date.getMinutes(),
		curYear = curDate.getFullYear(),
		curHour = curDate.getHours(),
		timeStr;

	if (year < curYear) {
		timeStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute;
	} else {
		var pastTime = curDate - date,
			pastH = pastTime / 3600000;

		if (pastH > curHour) {
			timeStr = month + '月' + day + '日 ' + hour + ':' + minute;
		} else if (pastH >= 1) {
			timeStr = '今天 ' + hour + ':' + minute + '分';
		} else {
			var pastM = curDate.getMinutes() - minute;
			if (pastM > 1) {
				timeStr = pastM + '分钟前';
			} else {
				timeStr = '刚刚';
			}
		}
	}
	return timeStr;
}




//悬浮球
assistive_mTouch = function() {
	var assistiveLeft, assistiveTop, timerid;

	var obj = document.getElementById("assistiveTouch")

	var stickEdge = function(el) {
		var left = obj.offsetLeft,
			Top = obj.offsetTop,
			width = obj.outerWidth,
			windowWith = (document.documentElement || document.body).offsetWidth;




		//开启以下代码段可以让小光点贴墙黏
		if (left > (windowWith - width) / 2) {
			left = windowWith - width - 2;
		} else {
			left = 0;
		}

		el.style.transition = 'all .2s';
		el.style['-webkit-transition'] = 'all .2s';
		el.style.left = left + 'px';
		timerid = setTimeout(function() {
			el.style.transition = 'all .5s';
			el.style['-webkit-transition'] = 'all .5s';
		}, 100);
	};


	obj.addEventListener('tap', function() {
		Show_Menu();
	})



	obj.addEventListener('hold', function(e) {
		clearTimeout(timerid);

		this.style.transition = 'none';
		this.style['-webkit-transition'] = 'none';


		assistiveLeft = obj.offsetLeft;
		assistiveTop = obj.offsetTop;

		e.stopPropagation();

	})

	obj.addEventListener('drag', function(e) {
		this.style.left = assistiveLeft + (e.detail.center.x - assistiveLeft) + 'px';
		this.style.top = assistiveTop + (e.detail.center.y - assistiveTop) + 'px';

		e.stopPropagation();
	})

	obj.addEventListener('dragend', function(e) {
		stickEdge(this);
		e.stopPropagation();
	});

}




// <summary>
// 展示小光点菜单
// </summary>
Show_Menu = function() {

	layer.open({
		skin: "assistiveTouch",
		closeBtn: 0,
		title: false,
		shadeClose: true,
		content: $("#htmlval").html(),
		btn: 0, //默认底部不显示任何按钮
		end: function() {
			layer.closeAll()
		}
	});


	$(".layui-layer-shade").unbind("click"); //源生的click太慢了

	$(".layui-layer-shade").bind("tap", function() {
		layer.closeAll(); //重新绑定tap事件最快了
	})


	$(".assistiveTouch").css({
		"width": "60%",
		"background": "rgba(0,0, 0, .6)",
		"border-radius": "20px",
		"left": "22%"
	})

	mui(".mui-table-view").on('tap', '.Menu_back', function() {
		layer.load(1, {
			time: 2000
		});
		mui.back();
	})
	mui(".mui-table-view").on('tap', '.Menu_refresh', function() {
		layer.load(1, {
			time: 2000
		});
		window.location.reload();
	})
	mui(".mui-table-view").on('tap', '.Menu_home', function() {
		layer.load(1, {
			time: 2000
		});
		mui.openWindow({
			url: "index.html",
			id: "index"
		});

	})

}


/*侧滑菜单*/
QQ_offCanvas = function() {
	var Main = mui('#Main'); //侧滑容器父节点
	Main[0].classList.add('mui-scalable'); //动画效果的类
	Main.offCanvas().refresh();
	document.getElementById('offCanvasHide').addEventListener('tap', function() {
		Main.offCanvas('close');
	});
	//支持区域滚动，需要添加.mui-scroll-wrapper
	mui('#offCanvasSideScroll').scroll();

}


/* 左滑返回的箭头 */
LeftPageGOBack = function() {
	var Touch_Hold_X = null; //起始坐标

	var Native_left = $("#leftpage").offset().left;

	document.addEventListener("hold", function(e) {
		Touch_Hold_X = e.detail.center.x;
		//console.log(Touch_Hold_X); 
	});

	document.addEventListener("dragend", function(e) {
		var left = $("#leftpage").offset().left;

		if (left >= 0) {

			//			mui.openWindow({
			//				url:"index.html",
			//				id:"index"
			//			});	
			mui.back();


		}

		$("#leftpage").animate({
			"left": "-66px"
		}, "fast");
		return;
	});




	document.addEventListener("drag", function(e) {

		var x = e.detail.center.x - Touch_Hold_X; //拖拉的距离	

		if (x > 0) {
			var left = Native_left + x;

			if (left < 0) //越趋近于0越大，当对象的left为0时完全展开  
			{
				$("#leftpage").css({
					"left": left
				});
			} else {
				$("#leftpage").css({
					"left": "0px"
				});
			}
		}
	})

}


/* 退出 */
quit = function() {
	var quit = document.getElementById("quit");

	quit.addEventListener("tap", function() {

		layer.confirm('你确定要退出吗？', {
			btn: ['确定', '取消'] //按钮
		}, function() {
			layer.load(1, {
				time: 3000
			});
			window.location.href = "login.html";
		}, function() {
			layer.closeAll();
		});

	})

}