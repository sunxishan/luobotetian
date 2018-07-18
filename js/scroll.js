$(function(){
    $(window).scroll(function(){//开始监听滚动条
        //获取当前滚动条高度
        var topp = $(document).scrollTop();
        //判断如果滚动条大于90则弹出 "ok"
        if(topp > 80){
            $("#navbar").animate({
                lineHeight:60,
                height:60
            },"fast").css("backgroundColor", "rgba(0, 0, 0, 1)");
        }else {
            $("#navbar").animate({
                lineHeight:100,
                height:100
            }).css("backgroundColor", "rgba(0, 0, 0, 0)");
        }
    })
})
