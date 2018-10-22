const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found.',
		name: 'Todo App v1.0'
	});
});

app.get('/users', (req, res) => {
	res.status(200).send([
		{
			name: 'Rebecca',
			age: 28
		},
		{
			name: 'Owan',
			age: 25
		},
		{
			name: 'Dijon',
			age: 17
		}
	]);
});

app.listen(3000);
module.exports.app = app;
