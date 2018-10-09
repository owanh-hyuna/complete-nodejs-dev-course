'use strict';
console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let user = os.userInfo();

fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

console.log('Time for some quick Math!');
console.log('If we add 9 and -2 then we get:', notes.add(9, -2));
