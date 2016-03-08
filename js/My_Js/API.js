
var API_业务类型列表 = ["通用扫码支付","微信找零"];





/* 核心业务处理函数 */
GetApiUrl = function(ModuleName)
{
	if(ModuleName == "Global_V0001_5un29")
	{
		//http://192.168.20.63:8008/Global_V0001_5un29/ApiIndex.aspx 测试
		return "http://192.168.22.23:31450/Global_V0001_5un29/ApiIndex.aspx";
	} 
	else if(ModuleName == "B001_V0001_5un29") 
	{
		return "http://192.168.20.63:8008/B001_V0001_5un29/ApiIndex.aspx";
	}  
	else
	{
		alert("没有找到对应URL，【ModuleName】：【" + ModuleName + "】");
	}
}
   
  


InvokeApi = function(apiUrl, ApiPath, MethodName, bodyJson , callBackFunctionName)
{
	var str_json = JSON.stringify(bodyJson);
	 
	android.send(apiUrl, ApiPath, MethodName, str_json , callBackFunctionName);
}



Api_filter = function(jsonstr)
{	
	var jsonobj =  eval('('+ jsonstr +')');
	
	var error = jsonobj.android_err_type;
	
	if(error != null)
	{
		var str = null;
		
		switch(error)
		{
			case 1:
			  str = "网络连接超时";
			  break;
			case 2:
			  str = "网络连接中断";
			  break;
			case 3:
			  str = "服务器繁忙，请稍后再试";
			  break;
			default:
			 str = "网络连接超时";
		}
		
		mui.toast(str);
		
		return false;
	}
	else
	{
		return jsonobj;
	}
}
  
 


