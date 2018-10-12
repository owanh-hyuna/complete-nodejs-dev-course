let square = x => x * x;
let user = {
	name: 'Owan',
	sayHi: () => {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	},
	sayHiAlt() {
		console.log(arguments);
		console.log(`Hi. I'm ${this.name}`);
	}
};

console.log(square(9));
user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
