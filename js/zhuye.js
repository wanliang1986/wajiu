/**
 * Created by IBM on 2017/10/3.
 */
$(function(){
    $(".pos").mousemove(function(){
        $(".pos").css("background","white")
        $(".end").css("display","block")
    })
    $(".pos").mouseout(function(){
        $(".pos").css("background","#ededed")
        $(".end").css("display","none")
    })
    $(".wajiu_ke").mousemove(function(){
        $(".nav_ke").css("display","block")
    })
    $(".wajiu_ke").mouseout(function(){
        $(".nav_ke").css("display","none")
    })
    var num =0;
    $(".focus_l").click(function(){
        num=num+1
        if(num%2 !=0){
            $(".dian li").css("background","#999999")
            $(".dian li").eq(1).css("background","#ef7e14")
            $(".lunbo_bigbox").animate({marginLeft:'-95%'})
        }else if(num%2 == 0){
            $(".dian li").css("background","#999999")
            $(".dian li").eq(0).css("background","#ef7e14")
            $(".lunbo_bigbox").animate({marginLeft:'0%'})
        }
    })
    $(".focus_r").click(function(){
        num=num+1
        if(num%2 !=0){
            $(".dian li").css("background","#999999")
            $(".dian li").eq(0).css("background","#ef7e14")
            $(".lunbo_bigbox").animate({marginLeft:'0%'})
        }else if(num%2 == 0){
            $(".dian li").css("background","#999999")
            $(".dian li").eq(1).css("background","#ef7e14")
            $(".lunbo_bigbox").animate({marginLeft:'-95%'})
        }
    })
    var index = 0;
    var left= 0;
    function  ban(){
        index++;
        left=left-340;
        if(index == $(".lunbo_2_n").length){
            index=0
            left=0
        }
        $(".lunbo_2_1").animate({"margin-left":+left+"px"})
        }
    var t= setInterval(ban,2000)
    $(".luobo_2_n li").mouseover(function(){
        clearInterval(t)
    })
    $(".luobo_2_n li").mouseout(function(){
        t= setInterval(ban,2000)
    })
    $(".lunbo_2_n li").mouseover(function (){
        var page = $(this).index();
        $(".lunbo_2_m").css("display","none");
        $(".lunbo_2_m").eq(page).css("display","block");
    })
    $(".under_list").mouseover(function(){
        $(".moban").css("display","block")
    })
    $(".under_list").mouseout(function(){
        $(".moban").css("display","none")
    })
    $(".fix li").mouseover(function(){
        $(".fix li").eq(0).html="在线客服"
        $(".fix li").eq(1).html="购物车"
        $(".fix li").eq(2).html="返回顶部"
    })
    window.onscroll = function() {
        var s =document.body.scrollTop;
        console.log(s)
        if (s<500){
            $(".dis").css("display","none")
        }
        else{
            $(".dis").css("display","block")
        }
    }







})