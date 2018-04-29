//Progress bar animation

var $progress = $('.progress');
var $progressBarJava = $('.progress-bar');
var $progressBarC = $('.bg-dark');
var $progressBarSQL = $('.bg-success');
var $progressBarPHP = $('.bg-info');
var $progressBarHTML = $('.bg-danger');
var $progressBarCSS = $('.bg-warning');

$(window).scroll(function() {
    var top_of_element = $(".cv").offset().top;
    var bottom_of_element = $progress.offset().top + $(".text-center").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        setTimeout(function() {
            $progressBarJava.css('width', '45%'); 
            $progressBarPHP.css('width', '55%');
            $progressBarC.css('width', '70%');
            $progressBarHTML.css('width', '60%');
            $progressBarSQL.css('width', '55%');
            $progressBarCSS.css('width', '55%');
        }, 1000); // WAIT 1 second
    }
    else {
      setTimeout(function() {
          $progressBarJava.css('width', '0%'); 
          $progressBarPHP.css('width', '0%');
          $progressBarC.css('width', '0%');
          $progressBarHTML.css('width', '0%');
          $progressBarSQL.css('width', '0%');
          $progressBarCSS.css('width', '0%');
      }, 1000); // WAIT 1 second
    }
});