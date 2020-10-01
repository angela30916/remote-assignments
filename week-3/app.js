/* Import Express and set up the app */
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

/* Set up middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

/* Setup view engine */
app.set('view engine', 'pug');

/* Import routes */
const routes = require('./routes/routes');

/* Import 404 and global error handlers */
const errorHandlers = require('./routes/errorHandlers'); 

/* Pass route handlers to the app */
app.use(routes);

/* Pass 404 and global error handlers to the app */
app.use(errorHandlers.handleFourOhFour);
app.use(errorHandlers.handleGlobalError);

/* Turn on Express server */
app.listen(3000, () => {
    console.log(`Server listening on port 3000`);
});