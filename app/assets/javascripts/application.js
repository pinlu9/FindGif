// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function loadDoc () {
  findgif = document.getElementById("myInput").value;

  request = new XMLHttpRequest;
  request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+findgif, true);

request.onload = function() {
if (request.status >= 200 && request.status < 400){
  data = JSON.parse(request.responseText).data.image_url;
  console.log(data);
  document.getElementById("gifhere").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
} else {
  console.log('reached giphy, but API returned an error');
 }
};

request.onerror = function() {
console.log('connection error');
};

request.send();
};
