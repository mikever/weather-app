const request = require('request');

const keys = require('./keys/keys');

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${keys.weatherKey}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
  } else {
      callback('Unable to find results');
  }
  });
};

module.exports.getWeather = getWeather;
