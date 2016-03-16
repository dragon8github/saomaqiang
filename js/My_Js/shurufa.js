/* 打开幽灵键盘全版  */
var shurufa_open = function(e)
{
	$(".shurufa_input_active").removeClass("shurufa_input_active"); 
	$(e).addClass("shurufa_input_active"); //添加标志
	var val = $(e).val();
	
	layer.open
	({
		style: 'width:100%;height:100%; background:rgba(0,0, 0, .2);',
		closeBtn: 0,
		title: false,
		shade:[0.1,"transparent"],
		shadeClose: true,
		anim:true,	//开启动画
		content: $("#shurufahtml").html(),	
		success:function(e)
		{
			$(".layermanim").css({"max-width":"100%"});
			$(".layermcont").css({"padding":"10px 20px 15px 20px"});	
			$("#shurufa_input").val(val);
			
			document.onkeydown=function(event)
			{
				var e = event || window.event || arguments.callee.caller.arguments[0]; 
				var keyCode = e.keyCode || e.which;
				if(keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105)
				{
					var k = get_keycode(keyCode);					
					var key= $("#shurufa_input").val() +  k;	
					$("#shurufa_input,.shurufa_input_active").val(key);							
				}
			}
		}
	}); 
	
	$("#shurufa_num li,#shurufa_q li,#shurufa_a li,#shurufa_z li").bind("click",function()
	{
		var myinput = $("#shurufa_input,.shurufa_input_active");
		var str = $(this).text();	
		var v = myinput.val() + str;	
		myinput.val(v); 
	})
	
	$("#shurufa_back").bind("click",function()
	{
		var myinput = $("#shurufa_input");
		var v = myinput.val();
		var value = v.substr(0,v.length - 1);
	    myinput.val(value); 
	    $(e).val(value);
	})
	
	$("#shurufa_clear").bind("click",function(){
		var myinput = $("#shurufa_input,.shurufa_input_active");
		myinput.val("");	
	})
	
	$("#shurufa_send").bind("click",function(){
		var myinput = $("#shurufa_input");
		var v = myinput.val();
		$(".shurufa_input_active").val(v);
		layer.closeAll();
	})
}


/* 打开幽灵键盘数字版  */
var shurufa_open_num = function(e)
{
	$(".shurufa_input_active").removeClass("shurufa_input_active"); 
	$(e).addClass("shurufa_input_active"); //添加标志.shurufa_input_active
	var val = $(e).val();

	layer.open
	({
		style: 'width:100%;height:100%; background:rgba(0,0, 0, .2);',
		closeBtn: 0,
		title: false,	
		shade:[0.1,"transparent"],
		shadeClose: true,
		anim:true,	//开启动画
		content: $("#shurufanumhtml").html(),
		success:function(e)
		{
			$(".layermanim").css({"max-width":"100%"});
			$(".layermcont").css({"padding":"10px 0px"});	
			$("#shurufa_input_num").val(val);
			
			//$("a").remove();
			//$("button").remove();
			
			document.onkeydown=function(event)
			{
				var e = event || window.event || arguments.callee.caller.arguments[0]; 
				var keyCode = e.keyCode || e.which;
				if(keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105)
				{
					var k = get_keycode(keyCode);					
					var key= $("#shurufa_input_num").val() +  k;	
					$("#shurufa_input_num,.shurufa_input_active").val(key);							
				}
			}
		}
	}); 
	
	
	$("#shurufa_num_123 li,#shurufa_num_456 li,#shurufa_num_789 li,#shurufa_num_c0 li").not("#shurufa_back").bind("click",function()
	{
		var myinput = $("#shurufa_input_num,.shurufa_input_active");
		var str = $(this).text();	
		var v = myinput.val() + str;	
		myinput.val(v); 
	})
	
	$("#shurufa_back").bind("click",function(){
		var myinput = $("#shurufa_input_num");
		var v = myinput.val();
		var value = v.substr(0,v.length - 1);
	    myinput.val(value); 
	    $(e).val(value); 
	})
	
	$("#shurufa_clear").bind("click",function()
	{
		var myinput = $("#shurufa_input_num,.shurufa_input_active");
		myinput.val("");	
	})
	
	$("#shurufa_send").bind("click",function()
	{
		var myinput = $("#shurufa_input_num");
		var v = myinput.val();
		$(".shurufa_input_active").val(v);
		layer.closeAll();
	})
}


//╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣  幽灵输入法全版 html ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣

幽灵输入法html = function()
{
	var shurufahtml = "<!-- 幽灵输入法  -->"+
"		<script type=\"text/template\" id=\"shurufahtml\">"+
"			<input type=\"text\" name=\"shurufa_input\" readonly=\"readonly\" id=\"shurufa_input\"  placeholder=\"Input Something ...\"/>"+
"			<ul id=\"shurufa_gongneng\">"+
"				<li id=\"shurufa_back\" class=\"mui-icon mui-icon-arrowthinleft\" style=\"width: 100px;\"><h4 class=\"shurufa_gongnengtitle\" >Back</h4></li>"+
"				<li id=\"shurufa_clear\" class=\"mui-icon mui-icon-trash\" style=\"width: 100px;\"><h4 class=\"shurufa_gongnengtitle\"  >Clear</h4></li>"+
"				<li id=\"shurufa_send\" class=\"mui-icon mui-icon-paperplane\" style=\"width: 100px;\" ><h4 class=\"shurufa_gongnengtitle\">Send</h4></li>"+
"			</ul>"+
"			<ul id=\"shurufa_num\">"+
"				<li>1</li>"+
"				<li>2</li>"+
"				<li>3</li>"+
"				<li>4</li>"+
"				<li>5</li>"+
"				<li>6</li>"+
"				<li>7</li>"+
"				<li>8</li>"+
"				<li>9</li>"+
"				<li>0</li>				"+
"			</ul>"+
"			<ul id=\"shurufa_q\">"+
"				<li>Q</li>"+
"				<li>W</li>"+
"				<li>E</li>"+
"				<li>R</li>"+
"				<li>T</li>"+
"				<li>Y</li>"+
"				<li>U</li>"+
"				<li>I</li>"+
"				<li>O</li>"+
"				<li>P</li>"+
"			</ul>"+
"			<ul id=\"shurufa_a\">"+
"				<li>A</li>"+
"				<li>S</li>"+
"				<li>D</li>"+
"				<li>F</li>"+
"				<li>G</li>"+
"				<li>H</li>"+
"				<li>J</li>"+
"				<li>K</li>"+
"				<li>L</li>				"+
"			</ul>"+
"			<ul id=\"shurufa_z\">				"+
"				<li>Z</li>"+
"				<li>X</li>"+
"				<li>C</li>"+
"				<li>V</li>"+
"				<li>B</li>"+
"				<li>N</li>"+
"				<li>M</li>				"+
"			</ul>"+
"		</script>";

	
	var size = $("#shurufahtml").size();
	
	if(size == 0)
	{
		$("body").append(shurufahtml);			
	}

}





//╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣  幽灵输入法数字版 html ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣
幽灵输入法数字版html = function()
{
	
	var shurufanumhtml = "<script type=\"text/template\" id=\"shurufanumhtml\">			"+
"			<ul id=\"shurufa_gongneng\">"+
"				<input type=\"text\" name=\"shurufa_input_num\" readonly=\"readonly\" id=\"shurufa_input_num\"  placeholder=\"Input Something ...\"/>"+
"				<li id=\"shurufa_send\"  class=\"mui-icon mui-icon-paperplane\" style=\"width: 88px;\" ><h4 class=\"shurufa_gongnengtitle\" style=\"padding-right:10px\">Send</h4></li>"+
"				<li id=\"shurufa_clear\" class=\"mui-icon mui-icon-trash\" style=\"width: 90px;\"><h4 class=\"shurufa_gongnengtitle\" style=\"padding-right:10px\" >Clear</h4></li>"+
"			</ul>"+
"			<ul id=\"shurufa_num_123\">"+
"				<li>1</li>"+
"				<li>2</li>"+
"				<li>3</li>"+
"				<li>0</li>"+
"			</ul>"+
"			<ul id=\"shurufa_num_456\">"+
"				<li>4</li>"+
"				<li>5</li>"+
"				<li>6</li>				"+
"				<li>.</li>"+
"			</ul>"+
"			<ul id=\"shurufa_num_789\">"+
"				<li>7</li>"+
"				<li>8</li>"+
"				<li>9</li>				"+
"				<li id=\"shurufa_back\">C</li>"+
"			</ul>"+
"		</script>";

	
	var size = $("#shurufanumhtml").size();
	
	if(size == 0)
	{
		$("body").append(shurufanumhtml);			
	}
}





/* 转换keycode */
var get_keycode = function(keycode)
{
	switch(keycode)
	{
		case 48:
		  return 0;
		  break;
		case 49:
		  return 1;
		  break;
	    case 50:
		  return 2;
		  break;
		case 51:
		  return 3;
		  break;
		case 52:
		  return 4;
		  break;
		case 53:
		  return 5;
		  break;
		case 54:
		  return 6;
		  break;
		case 55:
		  return 7;
		  break;
	    case 56:
		  return 8;
		  break;
		case 57:
		  return 9;
		  break;
		  
		//------------------  
		  
		case 96:
		  return 0;
		  break;
		case 97:
		  return 1;
		  break;
	    case 98:
		  return 2;
		  break;
		case 99:
		  return 3;
		  break;
		case 100:
		  return 4;
		  break;
		case 101:
		  return 5;
		  break;
		case 102:
		  return 6;
		  break;
		case 103:
		  return 7;
		  break;
	    case 104:
		  return 8;
		  break;
		case 105:
		  return 9;
		  break;
		
		
		//---------------
		case 108:
			return false;
			break;
		case 13:
			return false;
			break;
		default:
		  return 0;
	}
}
