
$(window).load(function() {
	$(".loader").fadeOut("slow");
})

$(document).ready(function() {

	$('.menu-anim li').hover(function() {
		$(this).addClass("slideDown", 400, "swing" );
	})

	$('.menu-anim li').mouseout(function() {
		$(this).removeClass("slideDown", 400, "swing");
	})

	$('.menu-anim2 li').hover(function() {
		$(this).addClass("slideDown2", 400, "swing" );
	})

	$('.menu-anim2 li').mouseout(function() {
		$(this).removeClass("slideDown2", 400, "swing");
	})

	$('.menu-anim3 li').hover(function() {
		$(this).addClass("slideDown3", 400, "swing" );
	})

	$('.menu-anim3 li').mouseout(function() {
		$(this).removeClass("slideDown3", 400, "swing");
	})

	//image backgrounds
	$('#dogear').parents().eq(2).css("background-color", "rgb(23, 127, 117)");

	//set box-video height
	function setHeight() {
    boxHeight = $('.box-video').height();
    vidHeight = $('.video').parent().height();
    $('.box-video').css('height', vidHeight +2);
  };
  setHeight();
  
  $(window).resize(function() {
    setHeight();
  });

})
