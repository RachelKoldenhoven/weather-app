

$(document).ready(function() {
  function jsonFlickrFeed (data) {
    console.log(data);
  };
  console.log("sanity check!");

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://jsonip.com",
  "method": "GET",
  "headers": {
  }
}
var ipAddress = '';

$.ajax(settings).done(function (response) {
  console.log(response.ip);
  ipAddress = response.ip;
  $('#ip').append(ipAddress);

});


$.ajax({
  url: "http://freegeoip.net/json/128.177.172.220",
  method: "GET",
  success: function(data) {
    $('#long').append(data.longitude);
    $('#lat').append(data.latitude);
    console.log(JSON.stringify(data));
  },
});

var settings = {
  "url": "http://www.flickr.com/services/feeds/photos_public.gne?tags=spring_flowers&format=json",
  "method": "GET",
}

$.ajax(settings);















});