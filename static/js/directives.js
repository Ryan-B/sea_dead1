app.directive('directionsMap', function(){
  return {
    restrict: 'A',
    
    link: function (scope, element, attrs) {

      
      var mapEl = element[0];
      

      console.log(mapEl);

      var myLatLng = {lat: 47.659282, lng: -122.340104 };
      var tuttabella = {lat: 47.660406, lng: -122.342521};
      var carkeek = {lat: 47.712969, lng: -122.378215};
      var pipers = {lat: 47.705934, lng: -122.355746};
      var boatstreet = {lat: 47.618224, lng: -122.357478};
      var gasworks = {lat: 47.646522, lng: -122.334603};
      var queencity = {lat: 47.643678, lng: -122.316702};
      
      

      var map = new google.maps.Map(mapEl, {
        zoom: 12,
        center: myLatLng,
      });
      var tuttabella_marker = new google.maps.Marker({
        position: tuttabella,
        map: map,
        title: "Tutta Belle Pizza",
        animation: google.maps.Animation.DROP,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        infoWindow: "Pizza",
       
      });
      var carkeek_marker = new google.maps.Marker({
        position: carkeek,
        map: map,
        title: "Carkeek Park",
        animation: google.maps.Animation.DROP,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
       
      });
      var pipers_marker = new google.maps.Marker({
        position: pipers,
        map: map,
        title: "Pub at Pipers Creek",
        animation: google.maps.Animation.DROP,
        label: 1,
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
       
      });
      var boatstreet_marker = new google.maps.Marker({
        position: boatstreet,
        map: map,
        title: "Boat Street Kitchen",
        animation: google.maps.Animation.DROP,
        label: 1,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
       
      });
       var gasworks_marker = new google.maps.Marker({
        position: gasworks,
        map: map,
        title: "Wedding Location",
        animation: google.maps.Animation.DROP,
        label: 1,
        icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
       
      });
       var queencity_marker = new google.maps.Marker({
        position: queencity,
        map: map,
        title: "Reception Location",
        animation: google.maps.Animation.DROP,
        label: 1,
        icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'
       
      });
     
    }


  };


});



