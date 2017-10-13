(function ($) {

  //buffer equal footer implementation
  function footerHeight() {
    var footerHeight = $(".footer").innerHeight();
    $(".page-buffer").innerHeight(footerHeight);
    $(".page-wrap").css('margin-bottom', -footerHeight+'px');
  }

  // implementation function for main slider
  function mainSlider() {
      $(".header-slider__flexslider").flexslider({
        animation: 'slide',
        animationLoop: true,
        useCSS: false,
        slideshow: true,
        slideshowSpeed: 7000,
        keyboard: false,
        start: function(){
          $('.slide-item').matchHeight();
        }
      });
  }

  // implementation function for top menu
  function topMenu() {
    var i = 1;


    $('.menu__drop-item > a').on("click", function () {
      if(i % 2 != 0) {
        $(this).find('+.menu').slideDown();
        i++;
      }

      else {
        $(this).find('+.menu').slideUp();
        i++;
      }

      return false;
    });

    $('body').on("click", function () {
      if(i % 2 == 0) {
        $('.menu__drop-item a + .menu').slideUp();
        i++;
      }
    });
  }

  // implementation function for search form
  function search() {
     var i = 1;

      $(".icon").on("click", function () {
        if (i % 2 == 0) {$(".top-menu-wrap").removeClass('search-open');
          $(".icon").removeClass('icon-close').addClass('icon-search');
          i++;
        }

        else {
            $(".top-menu-wrap").addClass('search-open');
            $(".icon").removeClass('icon-search').addClass('icon-close');
            i++;
        }
      });
  }

  // implemintation change top menu background color
  function scrollTop($top) {
    if($(window).scrollTop() > $top) {
      $(".top-menu").addClass('scroll-menu_blue');
    }

    else {
      $(".top-menu").removeClass('scroll-menu_blue');
    }
  }

  $(document).ready(function() {
    // Code to run when the document is ready.
    console.info('Avis Drupal 8 theme starter kit.');

    //buffer equal footer call
    footerHeight();

    //main slider call
    mainSlider();

    //top menu call
    topMenu();

    //search form call
    search();

    // mobile menu implemintation and call
    if(window.innerWidth < 1024) {
      $('#menu').mmenu({
        "counters": false,
        "extensions": [
          "pagedim-black"
        ],
        "offCanvas": {
          "position": "right",
          "zposition": "front",
        }
      });
    }
  });

  $(window).scroll(function () {

    //call change top menu background color
    if(window.innerWidth > 1024) {
      scrollTop(200);
    }

    if(window.innerWidth <= 1024) {
      scrollTop(50);
    }

  });

  $(window).load(function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    console.log('Complete page is fully loaded.');
  });

  $(window).resize(function () {

    //buffer equal footer call
    footerHeight();
  });

})(jQuery);
