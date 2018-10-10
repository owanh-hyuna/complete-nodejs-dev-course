'use strict';
console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
let note = null;

const argv = yargs.argv;
let command = argv._[0];
console.log('Command:', command);
console.log('Yargs:', argv);

switch (command) {
	case 'add':
		note = notes.addNote(argv.title, argv.body);
		if (note) {
			console.log('Note created');
			notes.logNote(note);
		} else {
			console.log('Note title taken');
		}
		break;
	case 'list':
		notes.getAll();
		break;
	case 'read':
		note = notes.getNote(argv.title);
		if (note) {
			console.log('Note found');
			notes.logNote(note);
		} else {
			console.log('Note not found');
		}
		break;
	case 'remove':
		let noteRemoved = notes.removeNote(argv.title);
		let message = noteRemoved ? 'Note was removed' : 'Note not found';
		console.log(message);
		break;
	default:
		console.log('Command not recognized');
		break;
}
