"use strict";

// application dependencies
const express = require("express");
const cors = require("cors");
const app = express();
const superagent = require("superagent");
app.use(cors());

// configure environment variables
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// tell our express server to start listening on port PORT
app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));

// routes
app.get("/location", (req, res) => {
  try {
    // console.log(req);
    searchLatLong(req.query.data);
    // const geoData = require("./data/geo.json");
    // const location = new Location(geoData, req.query.data);
    // console.log(location);
    // res.send(location);
  } catch (error) {
    console.log("There was an error in /location get");
    res.status(500).send("Server error", error);
  }
});

app.get("/weather", (request, response) => {
  try {
    const weatherData = require("./data/darksky.json");
    const dailyWeather = Object.values(weatherData.daily.data);
    const daysForecast = dailyWeather.map(day => new Forecast(day));
    // console.log(daysForecast);
    response.send(daysForecast);
  } catch (error) {
    handleError(error);
  }
});

//Helper Functions

function Location(res, data) {
  console.log("THE DATA IS :" + Object.keys(data).body);
  this.search_query = res;
  this.formatted_query = data.body.results[0].formatted_address;
  this.latitude = data.body.results[0].geometry.location.lat;
  this.longitude = data.body.results[0].geometry.location.lng;
}

function Forecast(day) {
  this.forecast = day.summary;
  this.time = new Date(day.time * 1000).toString().slice(0, 15);
}

function searchLatLong(query) {
  //   console.log(query);
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${
    process.env.GEOCODE_API_KEY
  }`;
  //   console.log(query);
  return superagent.get(url).then(res => {
    console.log(res.body.results[0]);
    return new Location(query, res);
  });
}
