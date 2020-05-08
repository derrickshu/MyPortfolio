//boundary polygon style
var myStyle0 = function(feature) {
    return {color:'white',fillColor:"T",weight: 1.5,fillOpacity: 0};
};

//circle marker style
var myStyle = function(feature) {
  switch(feature.properties.fatal) {
    case 1: return {
      radius: feature.properties.person_cou,
      color: "#EAF205",
      opacity: 0.8,
      fillOpacity: 1
    };
    case 0: return {
      radius: 1,
      //fillColor: "#ffcc5c",
      color: "#66CDD9",
      opacity: 0.6,
      fillOpacity: 1
    };
  }
};

// controls adding parks and vacant properties
//https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+ppr_tree_canopy_outlines_2015&filename=ppr_tree_canopy_outlines_2015&format=geojson&skipfields=cartodb_id

$('#count').click(function(){
  removeMarkers();
  $.getJSON('https://raw.githubusercontent.com/derrickshu/JS_Final/master/crash.json',function(data){
      L.geoJson(data,{style: myStyle0}).addTo(map);
      });
});

//define some functions
var removeMarkers = function() {
    map.eachLayer(function (layer) {
    map.removeLayer(layer);
});
var Stamen_TonerLite = L.tileLayer('https://api.mapbox.com/styles/v1/jiazuo/cjv1q09l53b821flit5ckay28/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamlhenVvIiwiYSI6ImNqdjFyeGFtZjF4bm40ZHF4cDZ6Z3hlaWEifQ.l0ev15iev-Epdyqx7Niimw', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      container: 'after',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png',
      center: [39.9526, -75.1652],
      zoom: 12.5
    }).addTo(map);

var Boundary = $.getJSON("https://raw.githubusercontent.com/MUSA-620-Spring-2019/week-10/master/data/City_Limits.geojson",function(limit){
    L.geoJson(limit,{style: myStyle0}).addTo(map);
    });
};


//
//All records
$('#Show_All').click(function(){
  removeMarkers();
  $.getJSON("https://raw.githubusercontent.com/derrickshu/JS_Final/master/crash.json",
   function(data) {
      L.geoJson(data, {
          pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.crash_year+"<dd>"+"</dd>"+
          'Month: '+feature.properties.crash_mont+"<dd>"+"</dd>"+'Day of Week: '+feature.properties.day_of_wee+"<dd>"+"</dd>"+'Time of Day: '+feature.properties.time_of_da+"<dd>"+"</dd>"+'Fatal Number: '+feature.properties.fatal_coun+"<dd>"+"</dd>"+
        'Injury Number: '+feature.properties.injury_cou+"<dd>"+"</dd>"+'People Involved: '+feature.properties.person_cou);
        }
      }).addTo(map);
  });
});//get geojson data of shootings

$('#Hide_All').click(function(){
	removeMarkers();
	});


//Filter by Year
$('#mySelect').change(function(){
    removeMarkers()
    var value = $(this).val();
    $.getJSON("https://raw.githubusercontent.com/derrickshu/JS_Final/master/crash.json",
     function(data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) { if (feature.properties.crash_year==value)
              { return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.crash_year+"<dd>"+"</dd>"+'Month: '+feature.properties.crash_mont+"<dd>"+"</dd>"+'Time of the day: '+feature.properties.time_of_da+"<dd>"+"</dd>"+'Injury: '+feature.properties.injury_cou+"<dd>"+"</dd>"+'Fatal: '+feature.properties.fatal_coun+"<dd>"+"</dd>"+'People Involved: '+feature.properties.person_cou+"<dd>"+"</dd>"+'Weather: '+feature.properties.weather+"<dd>"+"</dd>"+'Illumination Condition: '+feature.properties.illuminati);}
              }
        }).addTo(map);
    });
});

$('#mySelect1').change(function(){
    removeMarkers()
    var value = $(this).val();
    $.getJSON("https://raw.githubusercontent.com/derrickshu/JS_Final/master/crash.json",
     function(data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) { if (feature.properties.day_of_wee==value)
              { return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.crash_year+"<dd>"+"</dd>"+'Day of the Week: '+feature.properties.day_of_wee+"<dd>"+"</dd>"+'Injury: '+feature.properties.injury_cou+"<dd>"+"</dd>"+'Fatal: '+feature.properties.fatal_coun+"<dd>"+"</dd>"+'People Involved: '+feature.properties.person_cou);}
              }
        }).addTo(map);
    });
});

//Filter by Weather
$('#mySelect2').change(function(){
    removeMarkers()
    var value = $(this).val();
    $.getJSON("https://raw.githubusercontent.com/derrickshu/JS_Final/master/crash.json",
     function(data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) { if (feature.properties.weather==value)
              { return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.crash_year+"<dd>"+"</dd>"+'weather: '+feature.properties.weather+"<dd>"+"</dd>"+'Injury: '+feature.properties.injury_cou+"<dd>"+"</dd>"+'Fatal: '+feature.properties.fatal_coun+"<dd>"+"</dd>"+'People Involved: '+feature.properties.person_cou);}
              }
        }).addTo(map);
    });
});

$('#mySelect3').change(function(){
    removeMarkers()
    var value = $(this).val();
    $.getJSON("https://raw.githubusercontent.com/derrickshu/JS_Final/master/crash.json",
     function(data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) { if (feature.properties.illuminati==value)
              { return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.crash_year+"<dd>"+"</dd>"+'weather: '+feature.properties.weather+"<dd>"+"</dd>"+'Injury: '+feature.properties.injury_cou+"<dd>"+"</dd>"+'Fatal: '+feature.properties.fatal_coun+"<dd>"+"</dd>"+'People Involved: '+feature.properties.person_cou);}
              }
        }).addTo(map);
    });
});

//Filter by time of the day
$('#morning').click(function(){
  removeMarkers()
  $.getJSON("https://raw.githubusercontent.com/derrickshu/JS_Final/master/crash.json",
   function(data) {
      L.geoJson(data, {
          pointToLayer: function(feature, latlng) { if (feature.properties.hour_of_da==1)
            {
              return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.crash_year+"<dd>"+"</dd>"+'time of day: '+feature.properties.hour_of_da+"<dd>"+"</dd>"+'Injury: '+feature.properties.injury_cou+"<dd>"+"</dd>"+'Fatal: '+feature.properties.fatal_coun+"<dd>"+"</dd>"+'People Involved: '+feature.properties.person_cou);}
            }
      }).addTo(map);
  });
});

$('#noon').click(function(){
  removeMarkers()
  $.getJSON("https://raw.githubusercontent.com/derrickshu/JS_Final/master/crash.json",
   function(data) {
      L.geoJson(data, {
          pointToLayer: function(feature, latlng) { if (feature.properties.hour_of_da==2)
            {
               return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.crash_year+"<dd>"+"</dd>"+'time of day: '+feature.properties.hour_of_da+"<dd>"+"</dd>"+'Injury: '+feature.properties.injury_cou+"<dd>"+"</dd>"+'Fatal: '+feature.properties.fatal_coun+"<dd>"+"</dd>"+'People Involved: '+feature.properties.person_cou);}
            }
      }).addTo(map);
  });
});

$('#afternoon').click(function(){
  removeMarkers()
  $.getJSON("https://raw.githubusercontent.com/derrickshu/JS_Final/master/crash.json",
   function(data) {
      L.geoJson(data, {
          pointToLayer: function(feature, latlng) { if (feature.properties.hour_of_da==3)
            {
               return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.crash_year+"<dd>"+"</dd>"+'time of day: '+feature.properties.hour_of_da+"<dd>"+"</dd>"+'Injury: '+feature.properties.injury_cou+"<dd>"+"</dd>"+'Fatal: '+feature.properties.fatal_coun+"<dd>"+"</dd>"+'People Involved: '+feature.properties.person_cou);}
            }
      }).addTo(map);
  });
});

$('#night').click(function(){
  removeMarkers()
  $.getJSON("https://raw.githubusercontent.com/derrickshu/JS_Final/master/crash.json",
   function(data) {
      L.geoJson(data, {
          pointToLayer: function(feature, latlng) { if (feature.properties.hour_of_da==4)
            {
               return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.crash_year+"<dd>"+"</dd>"+'time of day: '+feature.properties.hour_of_da+"<dd>"+"</dd>"+'Injury: '+feature.properties.injury_cou+"<dd>"+"</dd>"+'Fatal: '+feature.properties.fatal_coun+"<dd>"+"</dd>"+'People Involved: '+feature.properties.person_cou);}
            }
      }).addTo(map);
  });
});
