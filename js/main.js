
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

			// Toggle using Jquery UI
	$("#dedo_button").click(function() {
		$('#dedo_copy1').toggle("slide", 500);
		$('#dedo_copy2').toggle("slide", 500);
	})


// POSTHASTE
	$("#posthaste_img").hover(function() {
		$(this).attr("src", "images/posthaste2.png");
		$(this).css("background-color", "white");
		$(this).css("border-radius", "140px");
		$(this).css("padding-left", "40px");
		$(this).css("padding-right", "40px");
	})
	$("#posthaste_img").mouseout(function() {
		$(this).attr("src", "images/posthaste1.png");
		$(this).css("background-color", "rgb(240, 120, 30)");
	})


//TINCAN
	var items = document.querySelectorAll('.circle p');

	for(var i = 0, l = items.length; i < l; i++) {
	  items[i].style.left = (50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	  
	  items[i].style.top = (50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
	}

	document.querySelector('.menu-button').onclick = function(e) {
	   e.preventDefault(); 
	   document.querySelector('.circle').classList.toggle('open');
	   document.querySelector('.circle').classList.toggle('white');
	}

	$.Velocity.RegisterEffect("goBack", {
		defaultDuration: 400,
		calls: [
			[ { translateY: "0px", scale: 1 } ]
		]
	})

	$('#what').click(function() {
		$('#message').velocity("goBack");
		if ( $('#title').css('visibility') == 'hidden' )
    	$('#title').css("visibility", "visible").velocity({ scale: 1.1 }, "ease-in-out");
  	else
    	$('#title').css("visibility", "hidden").velocity({ scale: .9 }, "ease-in-out");
	})

	$('#why').click(function() {
		$('#message').velocity("goBack");
		$('#message').addClass("tincan_why_where").html("<p>Faux business-site for PBX Voice Systems").velocity({ scale: 1.2, translateY: 30 }, "ease-in-out");
	})

	$('#how').click(function() {
		$('#message').velocity("goBack").removeClass("tincan_why_where");
		$('#message').html("").append("<ul>");
		$('#message ul').addClass("tech").append("<li>Ruby</li>", "<li>Sinatra</li>", "<li>Gems (mailer)</li>", "<li>CSS</li>", "<li>Javascript & JQuery</li>", "<li>AfterEffects & Photoshop</li>").velocity({ scale: 1.1, translateY: 10 }, "ease-in-out");
	})

	$('#where').click(function() {
		$('#message').velocity("goBack");
		$('#message').addClass("tincan_why_where").html("<p><a href='http://sinatra.mike-lucek.com/' target='_blank'>Click Here</a> to have a look.</p>").velocity({ scale: 1.2, translateY: 30 }, "ease-in-out");
	})


})