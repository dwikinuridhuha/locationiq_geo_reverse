const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function getCity(coordinates) {
  var xhr = new XMLHttpRequest();
  var lat = coordinates[0];
  var lng = coordinates[1];

  console.log(coordinates);

  // Paste your LocationIQ token below.
  xhr.open(
    "GET",
    "https://us1.locationiq.com/v1/reverse.php?key=pk.e69871779cce0a9fd45aa461a344f6c0&lat=" +
      lat +
      "&lon=" +
      lng +
      "&format=json",
    true
  );
  xhr.send();
  xhr.onreadystatechange = processRequest;
  xhr.addEventListener("readystatechange", processRequest, false);

  function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      var state = response.address.state;
      console.log(state);
      document.getElementById("tampil").innerHTML = state;
    }
  }
}

function success(position) {
  let cordinat = position.coords;
  let lat = cordinat.latitude.toString();
  let lng = cordinat.longitude.toString();
  let coordinates = [lat, lng];

  let location = getCity(coordinates);
  return location;
}

function error(error) {
  console.error(error.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);
