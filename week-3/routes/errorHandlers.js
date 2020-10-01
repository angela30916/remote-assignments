/*
* 404 and Global Error Handlers
*/

/* Error handler for handling non-existent routes */ 
const handleFourOhFour = (req, res, next) => {
    // Log statement to indicate that this function is running
    console.log('Handling 404 error');
    // Creat new error to handle non-existent route
    const err = new Error('err');
    err.status = 404;
    err.message = 'Oops, page not found. It looks like that route does not exist.';
    // Pass error to global error handler below
    next(err);
}

/* Global error handler */
const handleGlobalError = (err, req, res, next) => {
    // Log statement to indicate that this function is running
    console.log('Handling a global error');
    console.log(err);
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // Set error status and send error message to the page
    res.status(err.status || 500);
    res.send(err.message);
}

/* Export router */
module.exports = { handleFourOhFour, handleGlobalError };