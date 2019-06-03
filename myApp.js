
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here

app.use('/', (req, res, next) => {
  console.log(req.method, req.path, '-', req.ip);
  next();
})

// --> 11)  Mount the body-parser middleware  here



/** Let’s serve our first string! In Express, routes takes the following structure: app.METHOD(PATH, HANDLER).
 * METHOD is an http method in lowercase. PATH is a relative path on the server (it can be a string, or even a regular expression).
 * HANDLER is a function that Express calls when the route is matched.


Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object. For example, the handler */

console.log('server runs on port 3000')
app.get('/', (req, res) => res.send("Hello Express"))

/** 3) Serve an HTML file
 *  to serve file we use sendFile method
 * */

app.get('/form', (req, res) => res.sendFile( __dirname + '/views/index.html'))

/** 4) Serve static assets  */

app.use(express.static(__dirname + '/public/'))

/** 5) serve JSON on a specific route */

//app.get('/json', (req, res) => res.json({"message": "Hello json"}))

/** 6) Use the .env file to configure the app */
 
app.get('/json', (req, res) => {
  let message = 'Hello json';
  if(process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase()
  }
  return res.json({"message": message})
})

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
