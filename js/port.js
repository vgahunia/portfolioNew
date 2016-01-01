
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

})
