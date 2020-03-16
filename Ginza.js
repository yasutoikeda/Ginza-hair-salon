$(function(){
    $('.single-item').slick({
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      fade: true,
    });
  });

  window.onload = function() {
    scroll_effect();
  
    $(window).scroll(function(){
     scroll_effect();
    });
  
    function scroll_effect(){
     $('.effect-fade').each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
       $(this).addClass('effect-scroll');
      }
     });
    }
  };

  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 140.381381, lng: 37.400821},
      zoom: 5
    });
  }

 
