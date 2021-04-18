const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}))
app.use(express.json());

// use require('./routes/[route]')(app) for routing
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => {
	console.log(`Listening on PORT: ${PORT} \nThere are no signs of intelligent life anywhere...`);
});