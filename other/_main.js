
// (function(n){
// 	n.viewportSize={},
// 	n.viewportSize.getHeight=function(){
// 		return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};
// 			var t = function(t){
// 				var f,o = t.toLowerCase(),
// 					e = n.document,
// 					i = e.documentElement,r,u;
// 					return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);


$(document).ready(function() {
	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body'); 
	
	$body.imagesLoaded( function() {
		setTimeout(function() {      
      adjustWindow();
	  	$body.removeClass('loading').addClass('loaded');	  
		}, 1000);
	});
	
	function adjustWindow(){
		var s = skrollr.init({
	    render: function(data) {
	      //console.log(data.curTop);
	    }
		});  
		winH = $window.height();
	  if(winH <= 550) {
			winH = 550;
		} 
    $slide.height(winH);
    $slideTall.height(winH*2);
    $slideTall2.height(winH*3);
	    
	  s.refresh($('.homeSlide')); 
	}
})