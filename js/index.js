jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 576) {
        $('.skbf').removeClass('skew');
      } else if (ww >= 576) {
        $('.skbf').addClass('skew');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });