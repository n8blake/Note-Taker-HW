const path = require('path');

module.exports = (app) => {

	app.get('/notes', (request, response) => {
		response.sendFile(path.join(__dirname, '../public/notes.html'));
	});

	app.get('/assets/:folder/:file', (request, response) => {
		//console.log(request);
		response.sendFile(path.join(__dirname, `../public/assets/${request.params.folder}/${request.params.file}`));
	});

	app.get('*', (request, response) => {
		response.sendFile(path.join(__dirname, '../public/index.html'));
	});

};