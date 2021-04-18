const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

class NotesDB {
	
	// cannot use an asyncronous constructor
	// using init method after construction 
	// to read file asycnronously 
	constructor() {
		this.notes = [
			    {
			        "title":"Test Title",
			        "text":"Test text",
			        "id": 0
			    }
			];
	}

	init(callback){
		fs.readFile('db/db.json', 'utf8', (error, data) => {
			if(error){
				console.error(error);
			} else {
				this.notes = JSON.parse(data);
			} 
			callback.bind(this)();
		});		
	}

	getNotes = () => {
		return this.notes;
	}

	addNote = (note) => {
		const newNote = {};
		newNote.title = note.title;
		newNote.text = note.text;
		newNote.id = uuidv4();
		this.notes.push(newNote);
		this.save();
	}

	save = () => {
		const notes = JSON.stringify(this.notes);
		fs.writeFile('db/db.json', notes, (err) =>
			err ? console.error(err) : console.log('Notes Saved!')
		);
	}

	deleteNote = (id) => {
		this.notes.forEach(note => {
			if(note.id === id){
				this.notes.splice(this.notes.indexOf(note), 1);
			}
		});
		this.save();
	}

};

module.exports = NotesDB;