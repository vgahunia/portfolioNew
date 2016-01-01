
$(window).load(function() {
	$(".loader").fadeOut("slow");
})

$(document).ready(function() {

	$('#menutwo li a').hover(function() {
		$(this).parent().addClass("slideDown");
})

	$('#menutwo li a').mouseout(function() {
		$(this).parent().removeClass("slideDown");
	})

})
