$(document).ready(function() {
    $(window).on("resize load", function() {
      if ($(window).width() <= 1000) {
        $(".navbar-toggler").css("display", "block");
      } else {
        $(".navbar-toggler").css("display", "none");
      }
    });

   
  });


  