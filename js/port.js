
$(window).load(function() {
	$(".loader").fadeOut("slow");
})

$(document).ready(function() {

	$('#menutwo li').hover(function() {
		$(this).addClass("slideDown", 400, "swing" );
	})

	$('#menutwo li').mouseout(function() {
		$(this).removeClass("slideDown", 400, "swing");
	})

})
