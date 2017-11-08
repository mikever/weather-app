const request = require('request');

let getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/4998aa7c9fec16a0c1c66d296c77ca0c/${lat},${lng}`,
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
