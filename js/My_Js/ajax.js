/*♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤ Lee:我是超级全局AJAX ♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤♤*/Ajax_全局设置 = function (){
    //设置全局AJAX
    $.ajaxSetup
    ({
        //公共参数
        timeout: 10000,
        type: "POST",
 
        //发送请求前触发
        beforeSend: function (xhr)
        {
            layer.load(0, { shade: [0.5, '#fff'] });
            console.log("beforeSend_xhr:" + xhr);
        },
        //请求成功后触发,通常不写这个
        success: function (data)
        {
            layer.open({
                type: 0,
                content: "成功，喵呜~",
                icon: 6,
                closeBtn: 2,
                btn1: function (index) { layer.closeAll() },
                end: function () { layer.closeAll() }
            });
            console.log("success:" + data);
        },
        //请求失败遇到异常触发
        error: function (xhr, status, e)
        {
            if (status == 'timeout')
            {
                layer.open({
                    type: 0,
                    content: "超时了，喵呜~",
                    icon: 5,
                    closeBtn: 2,
                    btn1: function (index) { layer.closeAll() },
                    end: function () { layer.closeAll() }
                });
            }
            else
            {
                layer.open({
                    type: 0,
                    content: "处理失败，喵呜~",
                    icon: 5,
                    closeBtn: 2,
                    btn1: function (index) { layer.closeAll() },
                    end: function () { layer.closeAll() }
                });
            }
            console.log("error_xhr:" + xhr);
            console.log("error_status:" + status);
            console.log("error_e:" + e);
        },
        //完成请求后触发。即在success或error触发后触发
        complete: function (xhr, status)
        {
            if (status == "timeout")
            {
                layer.open({
                    type: 0,
                    content: "处理超时了，喵呜~建议刷新页面重试",
                    icon: 5,
                    closeBtn: 2,
                    btn: ['刷新', '取消'],
                    btn1: function (index)
                    {
                        layer.msg('玩命刷新中');
                        window.location.reload();
                    },
                    btn2: function (index) { layer.closeAll() },
                    end: function () { layer.closeAll() }
                });
            }
            else
            {
                layer.closeAll();
            }           
            console.log("complete_xhr:" + xhr);
            console.log("complete_status:" + status);
        },
    })}
