var queryUrl = 'https://api.nasa.gov/';
var apiKey = 'l4d8KRDBug3WIoAtVLbVInWj6DgnAAknmIzwgNEm';

queryUrl += $.param({
		'api_key': apiKey,
	});

console.log(queryUrl);

/*$.ajax({
	url:queryUrl,
	method: 'GET'
});*/






function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition)
	} else {
		alert('Geolocation is not supported by this browser');
	}
}

function showPosition(position){
	var latitude = position.coords.latitude;
	var longitute = position.coords.longitude;

	//Do something with lat and long here.
}


function GoogleGeocoding() {
	var address = $('#locationInput').val().trim();
	var apiKey = 'AIzaSyCeliRmHt2owSqzkOW55Jhoifz3B-YCuUU';
	var queryUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + 'key=' + apiKey;

	$.ajax({
		url: queryUrl,
		method:'GET'
	}).then(function(response){

		var status = response.status;
		if(status === 'OK'){
			var location = response.results[0].geometry.location;
			var lat = location.lat;
			var long = location.lng;
			
			// Do Something With Lat & Long here.
		} else {
			// Errors to be returned to client side if query doesn't return results.
			console.log(address + ' is not a valid location');
			console.log("Please enter a valid location in '123 Main Street, SomeState, USA' or 'City, SomeState' format.");

			// Do Something With Errors Here
		}		
	});
}

//Wikipedia Integration

var subject = "pizza";
var queryURLBlurb = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=3&format=json&exintro=&titles=" + subject;
var queryURLImage = "https://en.wikipedia.org/w/api.php?action=query&titles=" + subject + "&prop=pageimages&format=json&pithumbsize=200"

//for the blurb

$.ajax({
	url: "https://safe-headland-27088.herokuapp.com/" + queryURLBlurb,
	method: "GET",
	"crossDomain": true,
	"async": true
}).then(function(response) {
	$.each(response.query.pages,
	function(index, value) {
		var blurb = value.extract;
		console.log(blurb);
	});
})

//for the image

$.ajax({
	url: "https://safe-headland-27088.herokuapp.com/" + queryURLImage,
	method: "GET",
	"crossDomain": true,
	"async": true
}).then(function(response) {
	$.each(response.query.pages,
	function(index, value) {
		var imageURL = value.thumbnail.source;
		console.log(imageURL);
	});
})

//content change
$(document).on("click", "#go", function() {
	var location = $("#locationInput").val().trim();

	console.log(location);

	$("#header").empty();
	$("#content").empty();
	
})
