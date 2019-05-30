
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here



/** Let’s serve our first string! In Express, routes takes the following structure: app.METHOD(PATH, HANDLER).
 * METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression).
 * HANDLER is a function that Express calls when the route is matched.


Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object. For example, the handler */

console.log('server runs on port 3000')
app.get('/', (req, res) => res.send("Hello Express"))

/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



app.listen(process.env.PORT || 3000 );

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
