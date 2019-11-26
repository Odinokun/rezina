module.exports = function() {

  // begin Slick slider

  $('.index-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    prevArrow: "<div class='prev'><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 18\"><path d=\"M.36 8.152c-.235.236-.36.553-.36.861 0 .31.116.626.36.862l7.717 7.781c.477.481 1.242.481 1.719 0a1.228 1.228 0 0 0 0-1.732l-5.65-5.686h24.64c.674 0 1.214-.544 1.214-1.225 0-.68-.54-1.224-1.214-1.224H4.146l5.65-5.695a1.228 1.228 0 0 0 0-1.732 1.203 1.203 0 0 0-1.719 0z\"/></svg></div>",
    nextArrow: "<div class='next'><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 18\"><path d=\"M29.64 9.848c.235-.236.36-.554.36-.862 0-.308-.116-.625-.36-.86L21.923.342a1.204 1.204 0 0 0-1.718 0 1.228 1.228 0 0 0 0 1.733l5.65 5.686H1.213C.54 7.762 0 8.306 0 8.986c0 .68.54 1.225 1.214 1.225h24.64l-5.65 5.695a1.227 1.227 0 0 0 0 1.732 1.203 1.203 0 0 0 1.718 0z\"/></svg></div>"
  });

  // end Slick slider

};