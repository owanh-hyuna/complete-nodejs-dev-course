const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
	let db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);

	it('should call the spy correctly', () => {
		let spy = expect.createSpy();
		spy('Andrew', 25);
		expect(spy).toHaveBeenCalledWith('Andrew', 25);
	});

	it('should call saveUser with user object', () => {
		let email = 'owan@example.com';
		let password = '123abc';

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({ email, password });
	});
});
