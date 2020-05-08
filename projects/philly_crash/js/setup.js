

var mapOpts = {
      center: [39.98, -75.15],
      zoom: 12
    };
var map = L.map('map', mapOpts);

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
    //get geojson data of city limit
