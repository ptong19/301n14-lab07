"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const superagent = require("superagent");
const PORT = process.env.PORT || 3000;
app.use(cors());

function Location(city, geoData) {
  // console.log('DATA IS: ' + geoData.body.results);
  // console.log('CITY IS: ' + city);
  this.search_query = city;
  this.formatted_address = geoData.body.results[0].formatted_address;
  this.latitude = geoData.body.results[0].geometry.location.lat;
  this.longitude = geoData.body.results[0].geometry.location.lng;
}

function Forecast(day) {
  this.forecast = day.summary;
  this.time = new Date(day.time * 1000).toString().slice(0, 15);
}

app.get("/location", (request, response) => {
  searchLatLong(request.query.data).then(location => response.send(location));
});
app.get("/weather", (request, response) => {
  const weatherData = require("./data/darksky.json");
  const dailyWeather = Object.values(weatherData.daily.data);
  const blob = dailyWeather.map(day => new Forecast(day));
  // console.log(blob);
  response.send(blob);
});

function handleError(err, response) {
  console.error(err);
  if (response) {
    response.status(500).send("Sorry, something went wrong here.");
  }
}

// Find the lat/long of the city entered into the search
function searchLatLong(query) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${
    process.env.GEOCODE_API_KEY
  }`;
  return superagent.get(url).then(res => {
    return new Location(query, res);
  });
}

// Listen for a connection on port number
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// https://api.darksky.net/forecast/9cd69fb927af39d2c47f00b3dc1f0caf/37.8267,-122.4233
