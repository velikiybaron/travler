$(function(){
    $('.open').hide(1000);
    $('.hide').hide(1000);
    
    
    $('.show').on('click', function(){
        $('.open').show(1000);
        $('.hide').show(1000);
        $('.show').hide(1000);
    })
    
    $('.hide').on('click', function(){
        $('.open').hide(1000);
        $('.show').show(1000);
    })
})

function slowScroll(id){
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    },1000);
    return false;
}

