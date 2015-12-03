
// function for opening greeting

$(function() {
    $('#greeting').delay(200).fadeIn(1000);
    $('#greeting').delay(1000).fadeOut(1000);
    $('#greeting').hide();
    
    var today = new Date();
    var hourNow = today.getHours();
    var greet;

    if (hourNow > 18) {
        greet = 'Good evening!';
    } else if (hourNow > 12) {
        greet = 'Good Afternoon!';
    } else if (hourNow > 0) {
        greet = 'Good Morning!';
    } else {
        greet = 'And welcome again!';
    }
    
    setTimeout(function() {
        $('#greeting').fadeIn(1000).text(greet);
    }, 3500);
    
    setTimeout (function() {
        $('#greeting').fadeOut(1000);
    }, 11000);
});

// function for showing overlay for pic

$(function() {
    
   $('#under1').on('mouseover', function() {
    $('#overlay1').fadeIn(500);
   });
   $('#under1').on('mouseout', function() {
    $('#overlay1').fadeOut(200);
   });
    $('#under2').on('mouseover', function() {
    $('#overlay2').fadeIn(500);
   });
   $('#under2').on('mouseout', function() {
    $('#overlay2').fadeOut(200);
   });
    $('#under3').on('mouseover', function() {
    $('#overlay3').fadeIn(500);
   });
   $('#under3').on('mouseout', function() {
    $('#overlay3').fadeOut(200);
   });
   
});

