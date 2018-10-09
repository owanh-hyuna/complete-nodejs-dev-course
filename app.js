'use strict';
console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

let user = os.userInfo();
let filteredArray = _.uniq(['Andrew', 1, 'Andrew', 1, 2, 3, 4]);

fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

console.log('Time for some quick Math!');
console.log('If we add 9 and -2 then we get:', notes.add(9, -2));

console.log('_isString(true) evaluates to:', _.isString(true));
console.log('_.isString("Andrew") evaluates to:', _.isString('Andrew'));
console.log(filteredArray);
