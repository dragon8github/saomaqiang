
var shurufa_open = function(e)
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
		content: $("#shurufahtml").html(),
		
		success:function()
		{
			$(".layermanim").css({"max-width":"100%"});
			$(".layermcont").css({"padding":"10px 20px 15px 20px"});	
			$("#shurufa_input").val(val);
		}
	}); 
	
	$("#shurufa_num li,#shurufa_q li,#shurufa_a li,#shurufa_z li").bind("click",function()
	{
		var myinput = $("#shurufa_input");
		var str = $(this).text();	
		var v = myinput.val() + str;	
		myinput.val(v); 
	})
	$("#shurufa_back").bind("click",function(){
		var myinput = $("#shurufa_input");
		var v = myinput.val();
	    myinput.val(v.substr(0,v.length - 1)); 
	})
	$("#shurufa_clear").bind("click",function(){
		var myinput = $("#shurufa_input");
		myinput.val("");	
	})
	$("#shurufa_send").bind("click",function(){
		var myinput = $("#shurufa_input");
		var v = myinput.val();
		$(".shurufa_input_active").val(v);
		layer.closeAll();
	})
}




//╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣  幽灵输入法html ╠═╬═╬═╬═╬═╬═╬═╬═╬═╬═╣

幽灵输入法html = function()
{
	var shurufahtml = "		<!-- 幽灵输入法  -->"+
"		<script type=\"text/template\" id=\"shurufahtml\">"+
"			<input type=\"text\" name=\"shurufa_input\" readonly=\"readonly\" id=\"shurufa_input\"  placeholder=\"Input Something ...\"/>"+
"			<ul id=\"shurufa_gongneng\" style=\"\">"+
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
