const request = require("postman-request");
const url = require("./api");
const chalk = require("chalk");

const forecast = ({ latitude, longitude, location }, callback) => {
  const weatherStackURL = url.weatherStackURL(latitude, longitude);
  request({ url: weatherStackURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather-stack API...", undefined);
    } else if (response.success === false) {
      callback(
        "Unable to fetch weather information for the location entered...",
        undefined
      );
    } else {
      callback(undefined, {
        location,
        body: response.body,
      });
    }
  });
};

module.exports = forecast;
