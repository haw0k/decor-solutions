$(function() {
  //E-mail Ajax Send begin
	$("#feedback-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");
			console.log("Thank you!");
			$(".success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
  	return false;
  });
  //E-mail Ajax Send end

  $(document).on('click', '.menu-close', function (e) {
		e.preventDefault();
    $('.menu-close').toggle();
		$('.overlay').toggle(function(){
      $(this).css('display', 'none');
			$('body').removeClass('hidden-y');
    });

    $('.overlay ~ *').css('filter','none'); // убираем размытие фона
	});

  $(document).on('click', '.menu-toggle', function (e) {
    e.preventDefault();
    $('.overlay').toggle(function(){
      $(this).css('display', 'flex');
			$('body').toggleClass('hidden-y');
    });
    $('.overlay ~ *').css('filter','blur(5px)'); // добавляем размытие фона
    $('.menu-close').toggle();
  });
  // menu end

  // при клике по ссылке мобильного меню закрываем его
  $(document).on('click', '.main-menu--hidden li a.menu__link', function (e) {
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
  $(".menu__item").on("click","a.menu__link", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 900);
  });
  // anchor link animation end

  $('.show-form').magnificPopup({
  	type: 'inline',
  	preloader: false,
  	focus: '#your-name',
	});
});
