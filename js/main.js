
$(window).load(function() {
	$(".loader").fadeOut("slow");
})

$(document).ready(function() {
	$("#dogear_img").hover(function() {
		$(this).attr("src", "images/dogear_hover.png")
	})
	$("#dogear_img").mouseout(function() {
		$(this).attr("src", "images/dogear1.png")
	})

	$.Velocity
		.RegisterEffect("shadowIn", {
			defaultDuration: 600,
			calls: [
				[ { opacity: .9, scale: .8, rotateZ: "-5deg" }, 1.0 ]
			]
		})

		.RegisterEffect("shadowBack", {
			defaultDuration: 400,
			calls: [
				[ { rotateZ: "0deg", opacity: 1, scale: 1 } ]
			]
		})

		$(".vel-button").mouseover(function() {
			$(this).velocity("shadowIn");
		})
		$(".vel-button").mouseout(function() {
			$(this).velocity("shadowBack");
		})

})