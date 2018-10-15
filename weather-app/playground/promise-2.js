'use strict';
const request = require('request');
const yargs = require('yargs');

// Read .env vars into Node.
require('dotenv').config();

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h').argv;

let geocodeAddress = address => {
	return new Promise((resolve, reject) => {
		let encodedAddress = encodeURIComponent(address);

		request(
			{
				url: `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.GOOGLE_API_KEY}&address=${encodedAddress}`,
				json: true
			},
			(error, response, body) => {
				if (error) {
					reject('Unable to connect to Google servers.');
				} else if (body.status === 'ZERO_RESULTS') {
					reject('Unable to find that address.');
				} else if (body.status === 'OK') {
					resolve({
						address: body.results[0].formatted_address,
						latitude: body.results[0].geometry.location.lat,
						longitude: body.results[0].geometry.location.lng
					});
				}
			}
		);
	});
};

geocodeAddress(argv.address).then(
	location => {
		console.log(JSON.stringify(location, undefined, 2));
	},
	errorMessage => {
		console.log(errorMessage);
	}
);
