
  (function ($) {
  
  "use strict";

    // AOS ANIMATIONS
    AOS.init();

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // NEWS IMAGE RESIZE
    function NewsImageResize(){
      $(".navbar").scrollspy({ offset: -76 });
      
      var LargeImage = $('.large-news-image').height();

      var MinusHeight = LargeImage - 6;

      $('.news-two-column').css({'height' : (MinusHeight - LargeImage / 2) + 'px'});
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

   
    
  })(window.jQuery);

  // Slow down hero video on mobile
$(document).ready(function () {
  var video = document.querySelector(".custom-video");
  if (video && window.innerWidth <= 767) {
    video.playbackRate = .65; // 70% speed, adjust as you like
  }
});

// Disable right-click & copy/paste
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});

document.addEventListener("copy", function(e){
  e.preventDefault();
});

document.addEventListener("cut", function(e){
  e.preventDefault();
});

document.addEventListener("paste", function(e){
  e.preventDefault();
});
