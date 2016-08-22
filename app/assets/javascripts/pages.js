/*
$(document).ready(function(){

  $(".flex-layout").onepage_scroll({
     sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
     easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
     animationTime: 900, // AnimationTime let you define how long each section takes to animate
     pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
     updateURL: false // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  });
});
*/

function init() {
  // start up after 1sec no matter what
    window.setTimeout(function(){
        start();
    }, 1000);
}

// fade in experience
function start() {
  $('body').removeClass("loading").addClass('loaded');
}

// load init() function
$(window).load(function() {
  // fade in page
   init();
});


( function( $ ) {

  // Setup variables
  $window = $(window);
  $slide = $('.homeSlide');
  $body = $('body');

    //FadeIn all sections
  $body.imagesLoaded( function() {
    setTimeout(function() {

          // Resize sections
          adjustWindow();

          // Fade in sections
        $body.removeClass('loading').addClass('loaded');

    }, 800);
  });

  function adjustWindow(){

      // Get window size
      winH = $window.height();
      winW = $window.width();

      // Keep minimum height 550
      if(winH <= 550) {
          winH = 550;
      }

      // Init Skrollr for 768 and up
      if( winW >= 768) {

          // Init Skrollr
          var s = skrollr.init({
              forceHeight: false
          });

          // Resize our slides
          $slide.height(winH);

          s.refresh($('.homeSlide'));

      } else {

          // Init Skrollr
          var s = skrollr.init();
          s.destroy();
      }

    // Check for touch
      if(Modernizr.touch) {

      // Init Skrollr
      var s = skrollr.init();
      s.destroy();
      }

  }

  function initAdjustWindow() {
      return {
          match : function() {
              adjustWindow();
          },
          unmatch : function() {
              adjustWindow();
          }
      };
  }

  enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false)
          .listen(100);

} )( jQuery );

  // // initiate Skrollr
  // var s = skrollr.init({
  //   render: function(date){
  //     // debugging - log the current scroll position
  //     // console.log(data.curTop)
  //   }
  // });

