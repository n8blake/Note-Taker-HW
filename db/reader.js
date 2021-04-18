const fs = require('fs');

fs.readFile('db.json', 'utf8', (error, data) => {
	if(error){
		console.error(error);
		//reject(error);
	} else {
		console.log('got notes');
		console.log(data);
		//resolve(data);
		//this.notes = data;
	} 
});