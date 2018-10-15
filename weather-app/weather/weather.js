'use strict';
const request = require('request');

// Read .env vars into Node.
require('dotenv').config();

let getWeather = (lat, lng, callback) => {
	request(
		{
			url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${lat},${lng}`,
			json: true
		},
		(error, response, body) => {
			if (!error && response.statusCode === 200) {
				callback(undefined, {
					temperature: body.currently.temperature,
					apparentTemperature: body.currently.apparentTemperature
				});
			} else {
				callback('Unable to fetch weather.');
			}
		}
	);
};

module.exports.getWeather = getWeather;
