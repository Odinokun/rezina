module.exports = function() {


  //меню контактов
  $('.header-m__contacts-btn').on('click', function() {
    //если открыто меню
    if($('body').hasClass('menu-open')){
      $('body').removeClass('menu-open');
      $('body').addClass('contacts-open');

      $('.burger-icon__close').fadeOut(0);
      $('.burger-icon__active').fadeIn(0);
      $('.header-m__menu').slideUp();
      $('.header-m__contacts-menu').slideDown();
    }
    //если меню не открыто, но открыты контакты
    else if($('body').hasClass('contacts-open')) {
      $('body').removeClass('contacts-open');
      $('.header-m__contacts-menu').slideUp();
    }
    else {
      $('body').addClass('contacts-open');
      $('.header-m__contacts-menu').slideDown();
    }

  });



  //открываем меню
  $('.burger-icon__active').on('click', function() {
    //если открыты контакты
    if($('body').hasClass('contacts-open')){
      $('body').removeClass('contacts-open');
      $('body').addClass('menu-open');

      $('.burger-icon__active').fadeOut(0);
      $('.burger-icon__close').fadeIn(0);
      $('.header-m__contacts-menu').slideUp();
      $('.header-m__menu').slideDown();
    }
    //если контакты не открыты, но открыто меню
    else if($('body').hasClass('menu-open')) {
      $('body').removeClass('menu-open');
      $('.burger-icon__active').fadeIn(0);
      $('.burger-icon__close').fadeOut(0);
      $('.header-m__menu').slideUp();
    }
    else {
      $('body').addClass('menu-open');
      $('.burger-icon__active').fadeOut(0);
      $('.burger-icon__close').fadeIn(0);
      $('.header-m__menu').slideDown();
    }
  });


  //закрываем меню
  $('.burger-icon__close').on('click', function() {
    $('body').removeClass('menu-open');

    $('.burger-icon__close').fadeOut(0);
    $('.burger-icon__active').fadeIn(0);

    $('.header-m__menu').slideUp();
  });


  //подпункт меню в десктопе
  $('.menu-m__link-btn').on('click', function() {
    $(this).siblings('.submenu-m').slideToggle();
  });

};

