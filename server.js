// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 

/*
A request to /api/whoami should return a JSON object with your IP address in the ipaddress key.

A request to /api/whoami should return a JSON object with your preferred language in the language key.

A request to /api/whoami should return a JSON object with your software in the software key.

Expected output:
{"ipaddress":"::ffff:159.20.14.100","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
*/
app.get("/api/whoami", function (req, res) {
  const header = req.headers
  console.log(header);
  console.log()
  console.log("ipaddress:", header.host)
  console.log("language:", header["accept-language"]);
  console.log("software:", header["user-agent"]);
  res.json({
    ipaddress: header.host, 
    language: header["accept-language"],
    software: header["user-agent"]});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
