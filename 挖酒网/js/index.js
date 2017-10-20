$(function () {
    function change(temp){
        var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
        if(temp == 1){
            $(document).scrollTop(830);
        }else if(temp == 2){
            $(document).scrollTop(2750);
        }else if(temp == 3){
            $(document).scrollTop(3470);
        }else if(temp == 4){
            $(document).scrollTop(3970);
        }else if(temp == 5){
            $(document).scrollTop(4500);
        }
    }

    $(".jr_content_nav .nav_icon").click(function () {
        $(".jr_content_nav .nav_icon").removeClass("check");
        $(this).addClass("check");
        var temp = $(this).find("input").val();
        change(temp);
    });

    $(".banner3 .icon").click(function () {
        var temp = $(this).find("input").val();
        change(temp);
    });

    $(window).scroll(function(){
        var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;
        if(scrollTop >= 730){
            $(".jr_content_nav").show();
        }else {
            $(".jr_content_nav").hide();
        }
        if(scrollTop>=830&&scrollTop<2750){
            $(".nav_icon").removeClass("check");
            $(".nav1").addClass("check");
        }else if(scrollTop>=2750&&scrollTop<3470){
            $(".nav_icon").removeClass("check");
            $(".nav2").addClass("check");
        }else if(scrollTop>=3470&&scrollTop<3970){
            $(".nav_icon").removeClass("check");
            $(".nav3").addClass("check");
        }else if(scrollTop>3970&&scrollTop<4199){
            $(".nav_icon").removeClass("check");
            $(".nav4").addClass("check");
        }else if(scrollTop>=4199){
            $(".nav_icon").removeClass("check");
            $(".nav5").addClass("check");
        }
    });
    /*$.ajax({
        type: "GET",
        url: "http://shop.wajiu.com/user/checkIsLogin",
        dataType: "json",
        success: function (data) {
            if(data.isLogin==1){
                $('.item3 .box').html('<a href="javascript:;"><img src="http://image.59cdn.com/images/jinrong/pc/jinrong7_new.jpg"></a>');
                $('.box3 .box').html('<img src="http://image.59cdn.com/images/jinrong/pc/jinrong13.jpg">');
            }else if(data.isLogin==0){
                $('.bill_img').html('<a href="http://shop.wajiu.com/user/login?backUrl=http://shop.wajiu.com/finance.html"><img src="http://image.59cdn.com/images/jinrong/pc/jinrong6.jpg"></a>');
                $('.box3 .box').html('<img src="http://image.59cdn.com/images/jinrong/pc/jinrong10.jpg">');
            }else{
                alert('数据格式不正确');
            }
        },
        error: function (a, b, c) {
            console.log('ajax请求数据失败');
            console.log(b + c);
        }
    });*/
});