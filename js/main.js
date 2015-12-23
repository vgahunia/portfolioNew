
$(window).load(function() {
	$(".loader").fadeOut("slow");
})

$(document).ready(function() {

	// DOGEAR
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

		.RegisterEffect("goLeft", {
			defaultDuration: 400,
			calls: [
				[ { translateX: "-200px" } ]
			]
		})

		.RegisterEffect("goRight", {
			defaultDuration: 800,
			calls: [
				[ { translateX: "300px" } ]
			]
		})

		.RegisterEffect("goBack", {
			defaultDuration: 800,
			calls: [
				[ { translateX: "0px" } ]
			]
		})

	$(".vel-button").mouseover(function() {
		$(this).velocity("shadowIn");
	})
	$(".vel-button").mouseout(function() {
		$(this).velocity("shadowBack");
	})

	//DEDO

	function pulse(){
	  $('#dedo_button').velocity({ scale: 1.4}, "ease-in-out");
		$('#dedo_button').velocity("reverse", {duration: 1000});
	}

	var pulser = setInterval(pulse, 500);

	$("#dedo_button").click(function() {
		$('#dedo_copy1').toggle("slide", 500);
		$('#dedo_copy2').toggle("slide", 500);
	})

	// POSTHASTE
	$("#posthaste_img").hover(function() {
		$(this).attr("src", "images/posthaste2.png");
		$(this).css("background-color", "white");
		$(this).css("border-radius", "100px");
		$(this).css("padding-left", "40px");
		$(this).css("padding-right", "40px");
	})
	$("#posthaste_img").mouseout(function() {
		$(this).attr("src", "images/posthaste1.png");
		$(this).css("background-color", "rgb(240, 120, 30)");
	})

	//TINCAN
	var items = document.querySelectorAll('.circle a');

	for(var i = 0, l = items.length; i < l; i++) {
	  items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	  
	  items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	}

	document.querySelector('.menu-button').onclick = function(e) {
	   e.preventDefault(); 
	   document.querySelector('.circle').classList.toggle('open');
	}

})