const fs = require('fs');
const NotesDB = require('../db/NotesDB.js');

jest.mock('fs');

describe("NotesDB", () => {

	describe('getNotes', () => {
		it("Should return an array of note objects", () => {
			const db = new NotesDB();
			const expectedNotes = [
			    {
			        "title":"Test Title",
			        "text":"Test text",
			        "id": 0
			    }
			];
			var notes = db.getNotes();
			expect(notes).toEqual(expectedNotes);
		});	
	});

	describe('addNote', () => {
		it("Should be able to add a new note", () => {
			fs.writeFile.mockResolvedValue();
			const db = new NotesDB();
			const note = {};
			note.title = "Title";
			note.text = "This is my text for my new note";
			let notes = db.getNotes();
			expect(notes.length).toEqual(1);
			db.addNote(note);
			expect(fs.writeFile).toHaveBeenCalled();
			notes = db.getNotes();
			expect(notes.length).toEqual(2);
		});
	});

	describe('deleteNote', () => {
		it("Should be able to delete a note by its id", () => {
			fs.writeFile.mockResolvedValue();
			const db = new NotesDB();
			const note = {};
			note.title = "Title";
			note.text = "This is my text for my new note";
			let notes = db.getNotes();
			expect(notes.length).toEqual(1);
			db.addNote(note);
			expect(fs.writeFile).toHaveBeenCalledTimes(2);
			notes = db.getNotes();
			expect(notes.length).toEqual(2);
			let myNote = notes[1];
			expect(myNote.title).toEqual(note.title);
			const id = myNote.id;
			db.deleteNote(id);
			expect(fs.writeFile).toHaveBeenCalledTimes(3);
			notes = db.getNotes();
		});
	});

});