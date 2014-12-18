
jQuery(document).ready(function($) {

  $(window).stellar();


  $(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > 200) {
      $('.navbar').addClass('navbar-change');
    } else {
      $('.navbar').removeClass('navbar-change');
    }

  });

});
