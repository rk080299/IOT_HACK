var sock=new WebSocket("ws://10.4.168.208:5001");
var sock1=new WebSocket("ws://10.4.168.208:5002");
var map = new google.maps.Map(document.getElementById('map'),
{ center: {lat:12.82082 , lng: 80.038229}, zoom: 15 });
var gmarkers =[];
var uluru = {lat: 12.82082, lng: 80.038229};
var marker = new google.maps.Marker({position: uluru, map: map});
gmarkers.push(marker);

sock.onmessage=function(event){
             var dat = event.data.split(",");
             console.log(dat[0] + " "+ dat[1]);
    //  console.log(dat);
               // var ul = {lat:12.8172714, lng:80.0362114};
              var ul = {lat:parseFloat(dat[0]), lng:parseFloat(dat[1])};
              var marker1 = new google.maps.Marker({position: ul, map: map});
             gmarkers[0].setMap(null);
             gmarkers.push(marker1);


              var cityCircle = new google.maps.Circle({
                strokeColor: '#0000FF',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#0000FF',
                fillOpacity: 0.35,
                map: map,
                center: {lat:parseFloat(dat[0]), lng:parseFloat(dat[1])},
                radius: 1000
         });

      infowindow = new google.maps.InfoWindow();
        service= new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location:{lat:parseFloat(dat[0]), lng:parseFloat(dat[1])},
          radius: 1000,
          type: ['hospital']
        }, callback);

      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            console.log(results[i]);
          }
        }

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });


    var request = { reference: place.reference };
     service.getDetails(request, function(details, status) {
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent('<div><b>'+place.name+'</b><br>'+details.adr_address+'<br>'+details.formatted_phone_number+'<br>'+details.website+'</div>');
          infowindow.open(map, this);
        });
      });
    }
