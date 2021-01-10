//weather stack api : to fetch weather informationa

const weatherStackAPIKey = "8fdaf60f7683ad3ff92fe9b23b3cc4dc";
const weatherStackURL = (latitude, longitude) =>
  `http://api.weatherstack.com/current?access_key=${weatherStackAPIKey}&query=${latitude},${longitude}`;
// http://api.weatherstack.com/current?access_key=8fdaf60f7683ad3ff92fe9b23b3cc4dc&query=Bhilai

//mapbox api : to fetch geocode of any location

const geocodeAPIKey =
  "pk.eyJ1IjoibnJqNjY3MCIsImEiOiJja2UzMWwzMHIwZXhwMnRwZHltNTQzc296In0.GF10AMZpyai6o4F2trMzxw";
const geocodeURL = (address) =>
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${geocodeAPIKey}`;

module.exports = {
  weatherStackURL: weatherStackURL,
  geocodeURL: geocodeURL,
};
