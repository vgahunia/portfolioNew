
$(window).load(function() {
	$(".loader").fadeOut("slow");
})

$(document).ready(function() {
	//sets height for the scroll down indicator on top slide
	function setHeight() {
    windowHeight = $(window).height();
    $('.scroll-down').css('top', windowHeight - 60);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });

  $('.menu-anim li').hover(function() {
		$(this).addClass("slideDown", 500, "swing" );
	})

	$('.menu-anim li').mouseout(function() {
		$(this).removeClass("slideDown", 300, "swing");
	})


})