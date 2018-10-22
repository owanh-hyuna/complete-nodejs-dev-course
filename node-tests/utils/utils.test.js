const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
	let res = utils.add(33, 11);

	expect(res)
		.toBe(44)
		.toBeA('number');
});

it('should square a number', () => {
	let res = utils.square(5);

	expect(res)
		.toBe(25)
		.toBeA('number');
});

it('should set firstName and lastName', () => {
	let user = { location: 'Barbados', age: 25 };
	let res = utils.setName(user, 'Owan Hunte');

	expect(res).toInclude({
		firstName: 'Owan',
		lastName: 'Hunte'
	});
});

//it('should expect some values', () => {
//	//expect(12).toNotBe(12);
//	//expect({ name: 'owan' }).toNotEqual({ name: 'Owan' });
//	//expect([2, 3, 4]).toExclude(1);
//	expect({
//		name: 'Owan',
//		age: 25,
//		location: 'Barbados'
//	}).toInclude({
//		age: 25
//	});
//});
