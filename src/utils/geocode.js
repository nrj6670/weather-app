const request = require("postman-request");
const url = require("./api");
const forecast = require("./forecast");

const geocode = (address, callback) => {
  const geocodeURL = url.geocodeURL(address);
  request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services...", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search...", undefined);
    } else {
      forecast(
        {
          latitude: response.body.features[0].center[1],
          longitude: response.body.features[0].center[0],
          location: response.body.features[0].place_name,
        },
        callback
      );
    }
  });
};

module.exports = geocode;
