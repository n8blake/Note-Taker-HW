const path = require('path');
const fs = require('fs');
const NotesDB = require('../db/NotesDB.js');

module.exports = (app) => {

	// app.get('/api/notes', (request, response) => {
	// 	fs.readFile('db/db.json', 'utf8', (error, data) => {
	// 		if(error){
	// 			console.error(error);
	// 			response.json(error);
	// 		} else {
	// 			notes = JSON.parse(data);
	// 			response.json(notes);
	// 		} 
	// 	});
	// });

	app.get('/api/notes', (request, response) => {
		const db = new NotesDB();
		db.init(function(){
			const notes = db.getNotes();
			response.json(notes);
		});
	})

	app.post('/api/notes', (request, response) => {
		console.log(request.body);
		console.log(`Trying to create a new note`);
		// receive a new note object and
		// add it to the db.json file
		const db = new NotesDB();
		db.init(function(){
			const note = {};
			note.title = request.body.title;
			note.text = request.body.text;
			db.addNote(note);
			response.json(true);
		});
	});

	app.delete('/api/notes/:id', (request, response) => {
		console.log(`Trying to delete ${request.params.id}`);
		// delete the note with `id` 
		// from db.json and save
		const db = new NotesDB();
		db.init(function(){
			const id = request.params.id
			db.deleteNote(id);
			response.json(true);
		});
	});

};