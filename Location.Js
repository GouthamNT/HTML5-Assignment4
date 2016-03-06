var x = document.getElementById("coordinate");
var location;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,errormsg);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    location = "http://maps.googleapis.com/maps/api/geocode/json?&latlng="+latitude+','+longitude+"&sensor=true";
 }

function errormsg(error) {
    x.innerHTML = 'Problem Occured'; 
 }

function showlocation() {
    var a = document.querySelector('#location');
    var address;
    $.ajax({
        url: location,
        type: "POST",
        dataType: "JSON",
        success: function(response){
            console.log(response);
            address = response.results[0].formatted_address;
            console.log(address);
            showAddress(address);
        }
    });
}

function showAddress(address) {
    var add = document.querySelector('#address');
    add.textContent = address;
}