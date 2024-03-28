$(function() {
  //헤더 GNB
  $('#gnb>li').mouseenter(function() {
    $(this).children().css({
      'display':'flex',
      'gap' : '40px'
    });
    $('#header .gnb_bg').show()
  })
  $('#gnb>li').mouseleave(function() {
    $(this).children('ul, .dep2_wrap').hide();
    $('#header .gnb_bg').hide()
  })
  //검색폼
  $('.btn_search_open').click(function() {
    $('.search_wrap').show()
  })
  $('.btn_search_close').click(function() {
    $('.search_wrap').hide()
  })

  //전체 메뉴
  $('.btn_allmenu_open').click(function() {
    $('.allmenu_wrap').show();
    $('html').css('overflow','hidden')
  })
  $('.btn_allmenu_close').click(function() {
    $('.allmenu_wrap').hide();
    $('html').css('overflow','auto')
  })

  //전체메뉴 - 모바일
  $('.allmenu_list>li>a').click(function() {
    $(this).addClass('active');
    $('.allmenu_list>li>a').not(this).removeClass('active')
  });
  $('.allmenu_list .dep2>li>a').click(function() {
    $(this).addClass('active');
    $('.allmenu_list .dep2>li>a').not(this).removeClass('active')
  });

  $('.family_site_box button').click(function() {
    // $('.family_site_box ul').show()
    $(this).next().toggle();
    //$(this).find('::after').css('transform','rotate(180deg)') //::after 가상요소를 인식하지 못함
  })

  //고객사 이야기 swiper
  const customerSwiper = new Swiper('.swiper', {
    autoplay : {
      delay: 3000
    },
    loop: true,
    spaceBetween: 40,
    slidesPerView : 1,
    breakpoints : {
      768 : {
        slidesPerView : 1
      },
      1280 : {
        slidesPerView : 2
      }
    },
    pagination: {
      el: '.dot_btns',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.next_btn',
      prevEl: '.prev_btn',
    },
  });
})//ready()