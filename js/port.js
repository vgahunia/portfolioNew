
$(window).load(function() {
	$(".loader").fadeOut("slow");
})

$(document).ready(function() {
	//Portfolio menu
	$('.menu-anim li').hover(function() {
		$(this).addClass("slideDown", 500, "swing" );
	})

	$('.menu-anim li').mouseout(function() {
		$(this).removeClass("slideDown", 500, "swing");
	})
	//Bio Menu
	$('.menu-anim2 li').hover(function() {
		$(this).addClass("slideDown2", 500, "swing" );
	})

	$('.menu-anim2 li').mouseout(function() {
		$(this).removeClass("slideDown2", 300, "swing");
	})
	//Contact menu
	$('.menu-anim3 li').hover(function() {
		$(this).addClass("slideDown3", 500, "swing" );
	})

	$('.menu-anim3 li').mouseout(function() {
		$(this).removeClass("slideDown3", 300, "swing");
	})

	//image backgrounds
	$('#dogear').parents().eq(1).css("background-color", "rgb(23, 127, 117)");

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

  // animation for click button
  $.Velocity
		.RegisterEffect("shadowIn", {
			defaultDuration: 600,
			calls: [
				[ { scale: .9 }, 1.0 ]
			]
		})

		.RegisterEffect("shadowBack", {
			defaultDuration: 400,
			calls: [
				[ { scale: 1 } ]
			]
		})

	$(".click").mouseover(function() {
		$(this).velocity("shadowIn");
	})
	$(".click").mouseout(function() {
		$(this).velocity("shadowBack");
	})

})
