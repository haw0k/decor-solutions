$(function() {
  $(document).on('click', '.menu-close', function (e) {
  		e.preventDefault();
      // $('.main-menu--hidden').toggle(function(){
      //   $(this).css('display', 'none');
      // });
      $('.menu-close').toggle();
  		$('.overlay').slideToggle(function(){
        $(this).css('display', 'none');
      });
      // $('.menu-toggle').toggle();
  	});

    $(document).on('click', '.menu-toggle', function (e) {
      e.preventDefault();
      $('.overlay').slideToggle(function(){
        $(this).css('display', 'flex');
      });
      // $('.main-menu--hidden').toggle(function(){
      //   $(this).css('display', 'flex');
      // });
      $('.menu-close').toggle();
      // $('.menu-toggle').toggle();
    });
    // menu end

    // carousel for partners logos start
      $('.owl-carousel').owlCarousel({
          loop:true,
          autoplay: true,
          margin: 0,
          navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
          nav: true,
          items: 2,
      });
      // carousel for partners logos end
});
