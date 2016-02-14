


/* 核心业务处理函数 */

GetApiUrl = function(ModuleName)
{
	if(ModuleName == "Global_5un29")
	{
		return "http://192.168.20.63:8008/ApiIndex.aspx";
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
  
 

