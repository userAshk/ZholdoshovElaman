$('.menu-btn').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('menu-btn_active');
    $('.menu-block').toggleClass('menu-block_active')    
  
    $('.menu-block a' ).on('click', function(e){
      $('.menu-block').removeClass('menu-block_active')
      $('.menu-btn').removeClass('menu-btn_active')
    })  
});
  