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

let address = argv.address;
let encodedAddress = encodeURIComponent(address);

request(
	{
		url: `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.GOOGLE_API_KEY}&address=${encodedAddress}`,
		json: true
	},
	(error, response, body) => {
		console.log(`Address: ${body.results[0].formatted_address}`);
		console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
		console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
	}
);
