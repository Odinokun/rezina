module.exports = function() {

  // begin popup open
  $('.popup-open').on('click', function(e) {
    e.preventDefault();
    $('.popup').removeClass('active');

    var linkVal = $(this).data('popup');

    $(linkVal).addClass('active');
    $('.popup__layer').fadeIn();
  });
  // end popup open

  // begin popup close
  $('.popup__layer, .popup__close').on('click', function() {
    $('.popup').removeClass('active');
    $('.popup__layer').fadeOut();
  });
  // end popup close

};