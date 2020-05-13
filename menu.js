$(function() {
    
    $('#show').on('click',function(){
        
        $('body').addClass('menu-open');
    });
    $('#hide').on('click',function(){

        $('body').removeClass('menu-open');
    });
});

