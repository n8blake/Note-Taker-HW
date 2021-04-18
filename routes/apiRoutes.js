const path = require('path');

module.exports = (app) => {

	app.get('/api/notes', (request, response) => {
		// read db.json
		// return as JSON
	});

	app.post('/api/note', (request, response) => {
		// receive a new note object and
		// add it to the db.json file
	});

	app.delete('/api/note/:id', (request, response) => {
		// delete the note with `id` 
		// from db.json and save
	});

};