function getMarker(lat, lon, map, val) {
  var latLng = new google.maps.LatLng(lat, lon);

  function getCircle(size) {
    return {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: '#FF5757',
      fillOpacity: .5,
      scale: Math.pow(1.7, size) / Math.PI,
      strokeColor: 'red',
      strokeWeight: 0
    };
  }

  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    icon: getCircle(6)
  });
  var contentString = (val.title).link(val.url) + "<br>" + val.venue_name
  var infoWindowOptions = {
    content: contentString,
    maxWidth: 200
  };
  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
  google.maps.event.addListener(marker,'click', function(e){
    infoWindow.open(map,marker);
  });

  setTimeout(function(){marker.setMap(null)},180100);
};

// function events(map) {

//     $.each(response, function(index, value){
//       getMarker(value.latitude, value.longitude, map, value);
//     });

// };
