const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=11b9ce4aedefc5ac48db23a25c65e054&query=14.5034,75.4577";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("unable to find location");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        " It is Currently " +
        response.body.current.temperature +
        " degrees out. It feels like " +
        response.body.current.feelslike +
        " degrees out."
    );
  }
});

const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/hirekerur.json?access_token=pk.eyJ1IjoibWs4Nzc1MSIsImEiOiJjbG1tNHVxcGkwZnQwMmx0YmprZGhtaG9sIn0.LiY5GQ-hLSxsk8AOratskA&limit=1";

request({ url: geocodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to Mapbox service");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find Location");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log("Latitude: ", latitude);
    console.log("Longitude: ", longitude);
  }
});
