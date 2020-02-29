$(document).ready(function(){
    $('.main_btna').click (function(){
        $(".overlay").show(200)
        $(".modal").slideDown(1000)
    });
    $('.main_btn').on('click', function(){
        $(".overlay").show(200)
        $(".modal").slideDown(1000)
    });
    $('a[href="#sheldure"]').on('click', function(){
        $(".overlay").show(200)
        $(".modal").slideDown(1000)
    });
    $('.close:has(span)').click(function(){
        $(".modal").slideUp(200)
        $(".overlay").hide(300);
        console.log(this)
    })
   
});
