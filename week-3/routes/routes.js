/*
* Route Handlers
*/

/* Import Express and set up `express.Router` */
const express = require('express');
const router = express.Router();

/* Home route */
router.get('/', (req, res) => {
    // Log statement to indicate that this function is running
    console.log('Handleing request to root or "home" route, "/"');
    // Send gretting to the page
    res.send('<h1>Hello, My Server!</h1>');
});

/*
* Assignment 2: Build Backend API for Front-End
    Even if you are heading to be a front-end engineer, it’s much better to have some basic 
    experience in the backend field. Now, try to modify your code executed on the server side to 
    build a simple API. Your server should fulfill following client requests:
        1. When a user enters ​http://localhost:3000/getData​ in a browser’s address bar, 
            show the "Lack of Parameter" message in the page.
        2. When a user enters ​http://localhost:3000/getData?number=xyz​ in a browser’s 
            address bar, show the "Wrong Parameter" message in the page.
        3. When a user enters ​http://localhost:3000/getData?number=5​, they should get the 
            result of 1+2+....+5 in the page.
        4. Generally speaking, when a user enters ​http://localhost:3000/getData?number=正整數​, 
            they can get result of 1+2+....+正整數 in the page.
    Hint:​ handle HTTP GET method and parameters with Express on the server side.
*/

router.get('/getData', (req, res) => {
    const num = req.query.number;
    if (!num) {
        res.send('Lack of Parameter');
    } else if (Number.isInteger(+num) && +num > 0) {
        let result;
        result = ((1 + +num) * +num) /2;
        res.send(`<strong>${result}</strong>`);
    } else {
        res.send('Wrong Parameter');
    } 
});

/*
* Assignment 4: HTTP Cookie (Advanced Optional)
Cookie is an important mechanism for storing small pieces of data in the browser. 
Modify your code executed in the backend to use cookies for user tracking.
    1. Serve a URL ​http://localhost:3000/myName​ by your server.
    2. When the user connects to ​http://localhost:3000/myName​, check cookies for the 
        user's name in the backend.
        a. If you can get the user's name from cookies, show it on the web page. ​Done. 
        b. If you cannot get the user's name from cookies, show a HTML form including 
            a text input and a button in the web page. ​Go to step 3.
    3. User can enter his name in the text input, and then click button to submit form to a 
        URL ​http://localhost:3000/trackName?name=使用者的輸入​ which should be served 
            from your server, too.
    4. When user submits form to ​http://localhost:3000/trackName?name=使用者的輸入​, 
        you should get user’s name from HTTP parameter and store it in the cookies.
    5. Redirect user to ​http://localhost:3000/myName​, user can see his name, finally. ​Done.
*/

router.get('/myName', (req, res) => {
    const name = req.cookies.name;
    res.render('myName', { name: name });
});

router.get('/trackName', (req, res) => {
    const name = req.query.name;
    if (name) {
        res.cookie('name', name);
    }
    res.redirect('/myName');
});

/* Custom error route */ 
router.get('/error', (req, res) => {
  // Log statement to indicate that this function is running
  console.log('Handling request to custom "error" route, "/error"');
  // Create custom error and print error message to the page
  const err = new Error('err');
  err.message = 'Oops, it looks like an error occurred.';
  throw err;
});

/* Export router */
module.exports = router;