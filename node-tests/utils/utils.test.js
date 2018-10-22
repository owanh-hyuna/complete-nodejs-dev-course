const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
	describe('#add', () => {
		it('should add two numbers', () => {
			let res = utils.add(33, 11);

			expect(res)
				.toBe(44)
				.toBeA('number');
		});
	});

	it('should async add two numbers', done => {
		utils.asyncAdd(4, 3, sum => {
			expect(sum)
				.toBe(7)
				.toBeA('number');
			done();
		});
	});

	it('should square a number', () => {
		let res = utils.square(5);

		expect(res)
			.toBe(25)
			.toBeA('number');
	});

	it('should async square a number', done => {
		utils.asyncSquare(5, exp => {
			expect(exp)
				.toBe(25)
				.toBeA('number');
			done();
		});
	});
});

it('should set firstName and lastName', () => {
	let user = { location: 'Barbados', age: 25 };
	let res = utils.setName(user, 'Owan Hunte');

	expect(res).toInclude({
		firstName: 'Owan',
		lastName: 'Hunte'
	});
});
