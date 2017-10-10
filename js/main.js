(function ($) {
  //buffer equal footer implementation
  function footerHeight() {
    var footerHeight = $(".footer").innerHeight();
    $(".page-buffer").innerHeight(footerHeight);
    $(".page-wrap").css('margin-bottom', -footerHeight+'px');
  }

  function mainSlider() {
      $(".header-slider__flexslider").flexslider({
        animation: 'slide',
        animationLoop: true,
        useCSS: false,
        slideshow: true,
        slideshowSpeed: 7000,
        keyboard: false
      });
  }



  $(document).ready(function() {
    // Code to run when the document is ready.
    console.info('Avis Drupal 8 theme starter kit.');

    //buffer equal footer call
    footerHeight();

    mainSlider();
  });

  $(window).load(function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    console.log('Complete page is fully loaded.');
    $('.slide-item').matchHeight();
  });

  $(window).resize(function () {
    //buffer equal footer call
    footerHeight();
    $('.slide-item').matchHeight();
  });

})(jQuery);
