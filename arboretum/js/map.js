
var map;

function initialize(x) {
  
    var mapCanvas = document.getElementById('map-canvas');
    
    var mapOptions = {
      center: x,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(mapCanvas, mapOptions);
    
  }
  
function addMarker(map, x) {
  
    var markerOptions = {
      position: x,
      map: map,
      title: "Victoria Hill Arboretum",
      clickable: true
    }
    
    var marker = new google.maps.Marker(markerOptions);
    
  }

  var x = new google.maps.LatLng(39.9076, -75.3665);
  google.maps.event.addDomListener(window, 'load', initialize(x));
  google.maps.event.addDomListener(window, 'load', addMarker(map, x));