function initialize1() {
        var mapCanvas_1 = document.getElementById('map-canvas_1');
        var mapOptions_1 = {
          center: new google.maps.LatLng(-27.3585, -53.3967),
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map_1 = new google.maps.Map(mapCanvas_1, mapOptions_1)
      }
      function initialize2() {
        var mapCanvas_2 = document.getElementById('map-canvas_2');
        var mapOptions_2 = {
          center: new google.maps.LatLng(-27.3585, -53.3967),
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map_2 = new google.maps.Map(mapCanvas_2, mapOptions_2)
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
        var map_3 = new google.maps.Map(mapCanvas_3, mapOptions_3)
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
        var map_4 = new google.maps.Map(mapCanvas_4, mapOptions_4)
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