/**
 * Created by IBM on 2017/10/5.
 */
$(function() {
    $(".pos").mousemove(function () {
        $(".pos").css("background", "white")
        $(".end").css("display", "block")
    })
    $(".pos").mouseout(function () {
        $(".pos").css("background", "#ededed")
        $(".end").css("display", "none")
    })
    $(".paw").click(function(){
        $(".paw").css("color","#ef7e14")
        $(".pho").css("color","#333333")
        $(".form_paw").css("display","block")
        $(".form_pho").css("display","none")
    })
    $(".pho").click(function(){
        $(".pho").css("color","#ef7e14")
        $(".paw").css("color","#333333")
        $(".form_paw").css("display","none")
        $(".form_pho").css("display","block")
    })



















})