//判断两个值是否相等
Is_equal = function(str,str2,toast)
{
	if(str != str2)
	{
		mui.toast(toast);
		return false;
	}
	return true;
}

//是否为空
Is_Null = function(str,toast)
{
	if(str.replace(/(\s*$)/g,"").length == 0)
	{
		mui.toast(toast);
		return false;
	}
	
	return true;
}
		
		
//是否为手机号码		
Is_Phone = function(phone,toast)
{
	if (!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(phone)) 
	{
		mui.toast(toast);
		return false;
	}
	return true;
}


//检查输入字符串是否符合正整数格式  
isNumber = function(str,toast)
{
	var regu = "^[0-9]+$";   
	var re = new RegExp(regu);   
	if (str.search(re) == -1)
	{
		mui.toast(toast);
		return false;
	} 
	return true;
}  


//检查输入对象的值是否符合整数格式 ,可以是负数
isInteger = function(str,toast)
{
	var regu = /^[-]{0,1}[0-9]{1,}$/;   
	if(!regu.test(str))
	{
		mui.toast(toast);
		return false;
	}
	return true;
}

//检查输入字符串是否是带小数的数字格式,可以是负数  
isDecimal = function(str)
{
	var re = /^[-]{0,1}(\d+)[\.]+(\d+)$/;   
	if (!re.test(str)) 
	{
		mui.toast(toast);
		return false;  
	} 
	return true;
}   


//检验长度
Is_Length = function(str,num,toast)
{
	if(str.length < num)
	{
		mui.toast(toast);
		return false;
	}
	return true;
}

//检验是否字母+数字的组合
Is_CnUs = function(str,toast)
{
	if (!/[_a-zA-Z]+\d+/g.test(str))
	{
		mui.toast(toast);
		return false;
	}
	return true;
}
