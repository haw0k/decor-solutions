$(function() {
  $(document).on('click', '.menu-close', function (e) {
  		e.preventDefault();
      // $('.main-menu--hidden').toggle(function(){
      //   $(this).css('display', 'none');
      // });
      $('.menu-close').toggle();
  		// $('.overlay').slideToggle(function(){
  		$('.overlay').toggle(function(){
        $(this).css('display', 'none');
      });

      $('.overlay ~ *').css('filter','none'); // убираем размытие фона
      // $('.menu-toggle').toggle();
  	});

    $(document).on('click', '.menu-toggle', function (e) {
      e.preventDefault();
      $('.overlay').toggle(function(){
      // $('.overlay').slideToggle(function(){
        $(this).css('display', 'flex');
      });
      $('.overlay ~ *').css('filter','blur(5px)'); // добавляем размытие фона
      // $('.main-menu--hidden').toggle(function(){
      //   $(this).css('display', 'flex');
      // });
      $('.menu-close').toggle();
      // $('.menu-toggle').toggle();
    });
    // menu end

    // при клике по ссылке мобильного меню закрываем его
    $(document).on('click', '.main-menu--hidden li a', function (e) {
      // e.preventDefault();
      $('.menu-close').toggle();
  		$('.overlay').toggle(function(){
        $(this).css('display', 'none');
      });
      $('.overlay ~ *').css('filter','none'); // убираем размытие фона
    });

    // carousel for partners logos start
    $('.carousel').slick({
      variableWidth: false,
      autoplay: true,
      arrows: true,
      dots: false,
      slidesToShow: 6,
      pauseOnFocus: true,
      pauseOnHover: true,
      cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      responsive: [
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1281,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    // carousel for partners logos end

    // anchor link animation start
    $(".menu__item").on("click","a", function (event) {
     //отменяем стандартную обработку нажатия по ссылке
     event.preventDefault();
     console.log('bbbbb');

     //забираем идентификатор бока с атрибута href
     var id  = $(this).attr('href'),

     //узнаем высоту от начала страницы до блока на который ссылается якорь
       top = $(id).offset().top;

     //анимируем переход на расстояние - top за 1500 мс
     $('body,html').animate({scrollTop: top}, "slow");
    });
    // anchor link animation end

});
