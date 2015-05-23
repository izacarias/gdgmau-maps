function initialize1() {
        var mapCanvas_1 = document.getElementById('map-canvas_1');
        var mapOptions_1 = {
          center: new google.maps.LatLng(-27.3585, -53.3967),
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map_1 = new google.maps.Map(mapCanvas_1, mapOptions_1);
      }
      function initialize2() {
        var mapCanvas_2 = document.getElementById('map-canvas_2');
        var mapOptions_2 = {
          center: new google.maps.LatLng(-27.3585, -53.3967),
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map_2 = new google.maps.Map(mapCanvas_2, mapOptions_2);
        var marker_2 = new google.maps.Marker({
            position: new google.maps.LatLng(-27.3585, -53.3967),
            map: map_2,
            title: 'Aqui fica Frederico Westphalen'
        });
      }
      function initialize3() {
        var mapCanvas_3 = document.getElementById('map-canvas_3');
        var mapOptions_3 = {
          center: new google.maps.LatLng(-27.378599, -53.413737),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map_3 = new google.maps.Map(mapCanvas_3, mapOptions_3);
        var marker_3 = new google.maps.Marker({
            position: new google.maps.LatLng(-27.3585, -53.3967),
            map: map_3,
            title: 'Aqui fica Frederico Westphalen'
        });
        var marker_3_1 = new google.maps.Marker({
            position: new google.maps.LatLng(-27.395195, -53.428319),
            map: map_3,
            title: 'Aqui fica a UFSM/FW'
        });
        var marker_3_2 = new google.maps.Marker({
            position: new google.maps.LatLng(-27.390680, -53.430186),
            map: map_3,
            title: 'Aqui fica o IF Farroupilha - FW'
        });
      }

      function initialize4() {
        var mapCanvas_4 = document.getElementById('map-canvas_4');
        var mapOptions_4 = {
          center: new google.maps.LatLng(-27.378599, -53.413737),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map_4 = new google.maps.Map(mapCanvas_4, mapOptions_4);
        var marker_4 = new google.maps.Marker({
            position: new google.maps.LatLng(-27.3585, -53.3967),
            map: map_4,
            title: 'Aqui fica Frederico Westphalen'
        });
        var marker_4_1 = new google.maps.Marker({
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            position: new google.maps.LatLng(-27.395195, -53.428319),
            map: map_4,
            title: 'Aqui fica a UFSM/FW'
        });
        var marker_4_2 = new google.maps.Marker({
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            position: new google.maps.LatLng(-27.390680, -53.430186),
            map: map_4,
            title: 'Aqui fica o IF Farroupilha - FW'
        });
        map_4.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legenda'));
        var legenda = document.getElementById('legenda');
        var p = document.createElement('p');
        var p2 = document.createElement('p');
        var p3 = document.createElement('p');
        p.innerHTML = '<img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png">Frederico Westphalen';
        p2.innerHTML = '<img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png">UFSM/FW';
        p3.innerHTML = '<img src="http://maps.google.com/mapfiles/ms/icons/green-dot.png">IF Farroupilha/FW';
        legenda.appendChild(p);
        legenda.appendChild(p2);
        legenda.appendChild(p3);
      }

      function initialize5() {
        var mapCanvas_5 = document.getElementById('map-canvas_5');
        var mapOptions_5 = {
          center: new google.maps.LatLng(-27.378599, -53.413737),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.HYBRID
        }
        var map_5 = new google.maps.Map(mapCanvas_5, mapOptions_5);
        var marker_5 = new google.maps.Marker({
            position: new google.maps.LatLng(-27.3585, -53.3967),
            map: map_5,
            title: 'Aqui fica Frederico Westphalen'
        });
        var marker_5_1 = new google.maps.Marker({
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            position: new google.maps.LatLng(-27.395195, -53.428319),
            map: map_5,
            title: 'Aqui fica a UFSM/FW'
        });
        var marker_5_2 = new google.maps.Marker({
            icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            position: new google.maps.LatLng(-27.390680, -53.430186),
            map: map_5,
            title: 'Aqui fica o IF Farroupilha - FW'
        });
        map_5.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('legenda'));
        var legenda = document.getElementById('legenda');
        var p = document.createElement('p');
        var p2 = document.createElement('p');
        var p3 = document.createElement('p');
        p.innerHTML = '<img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png">Frederico Westphalen';
        p2.innerHTML = '<img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png">UFSM/FW';
        p3.innerHTML = '<img src="http://maps.google.com/mapfiles/ms/icons/green-dot.png">IF Farroupilha/FW';
        legenda.appendChild(p);
        legenda.appendChild(p2);
        legenda.appendChild(p3);
        
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map_5);

        var request = {
          origin:new google.maps.LatLng(-27.3585, -53.3967), 
          destination:new google.maps.LatLng(-27.395195, -53.428319),
          travelMode: google.maps.DirectionsTravelMode.DRIVING
        };

        directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(response);
          }
        });

        var ufsm = "<b>UFSM/FW</b><p><a href='http://www.cesnors.ufsm.br/'>www.cesnors.ufsm.br</a>";
        var iff = "<b>IF Farroupilha/FW</b><p><a href='http://www.fw.iffarroupilha.edu.br/'>www.fw.iffarroupilha.edu.br</a>";
        var info_ufsm = new google.maps.InfoWindow({
            content: ufsm
        });
        var info_iff = new google.maps.InfoWindow({
            content: iff
        });
        google.maps.event.addListener(marker_5_1, 'click', function() {
          info_ufsm.open(map_5,marker_5_1);
        });
        google.maps.event.addListener(marker_5_2, 'click', function() {
          info_iff.open(map_5,marker_5_2);
        });
      }

      function initialize6() {
        var mapCanvas_6 = document.getElementById('map-canvas_6');
        var mapOptions_6 = {
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map_6 = new google.maps.Map(mapCanvas_6, mapOptions_6);

        // Try HTML5 geolocation
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                                             position.coords.longitude);

            var infowindow = new google.maps.InfoWindow({
              map: map_6,
              position: pos,
              content: '<p><b>Você está próximo deste ponto</b></p>' +
                       '<p>Latitude: ' + pos.lat() + '</p>' +
                       '<p>Longitude: ' + pos.lng() + '</p>'
            });

            map_6.setCenter(pos);
        });
      }

      var geocoder;
      var map_7;
      function initialize7() {
        geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(-11.023498, -52.357528);
        var mapOptions = {
          zoom: 3,
          center: latlng
        }
        map_7 = new google.maps.Map(document.getElementById('map-canvas_7'), mapOptions);
      }

      function codeAddress() {
        var address = document.getElementById('address').value;
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            map_7.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map_7,
                position: results[0].geometry.location
            });
          } else {
            alert('O Geocode não funcionou por alguma razão: ' + status);
          }
        });
      }
