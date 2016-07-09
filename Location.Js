var x = document.getElementById("coordinate");
var latitude,longitude;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,errormsg);
        //document.forms.submit();
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }   
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("latitude");
    showlocation();
    console.log(location);
 }

function errormsg(error) {
    x.innerHTML = 'Problem Occured'; 
 }

function showlocation() {
    console.log(location);
    var address;
    $.ajax({
        url: "http://maps.googleapis.com/maps/api/geocode/json?&latlng="+latitude+','+longitude+"&sensor=true",
        type: "GET",
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