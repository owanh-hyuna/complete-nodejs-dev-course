'use strict';
console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
	try {
		let notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (error) {
		return [];
	}
};

let saveNotes = notes => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
	let notes = fetchNotes();
	let note = {
		title,
		body
	};
	let duplicateNotes = notes.filter(note => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	}
};

let getAll = () => {
	console.log('Getting all notes');
};

let getNote = title => {
	let notes = fetchNotes();
	let filteredNotes = notes.filter(note => note.title === title);
	return filteredNotes.length > 0 ? filteredNotes[0] : null;
};

let removeNote = title => {
	let notes = fetchNotes();
	let filteredNotes = notes.filter(note => note.title !== title);

	if (notes.length !== filteredNotes.length) {
		saveNotes(filteredNotes);
		return true;
	} else {
		return false;
	}
};

let logNote = note => {
	console.log('---');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
};

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};
