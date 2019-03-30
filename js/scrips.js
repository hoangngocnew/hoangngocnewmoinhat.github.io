$(document).ready(function () {
    $(".lentop").click(function(){
        $('html').animate({scrollTop:0},500,function(){
            $(".chu").hide();
        });
    });
});