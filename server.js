'use strict';
const os = require('os');
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hey there! Welcome to Anil\'s container app. Its ' + (new Date()).toString() +'\n');
});

app.get('/host', (req, res) => {
  res.send('host: ' + os.hostname() +'\n');
});

app.get('/time', (req, res) => {
  res.send((new Date()).toUTCString() +'\n');
});

app.get('/echo', (req, res) => {
	if(!req.query.text)
		res.send("Usage: http://baseurl/echo?text=sayIt" + "\n");
	else
  	res.send(req.query.text +'\n');
});

// app.get('/os', (req, res) => {
//   var response = {};
//   for(var q in req.query){
// 	if(q == "cpu")
// 		response[q] = os.cpus();
// 	else if(q == "hostname")
// 		response[q] = os.hostname();
// 	else if(q == "const")
// 		response[q] = os.constants;
// 	else if(q == "arch")
// 		response[q] = os.arch();
// 	else if(q == "freemem")
// 		response[q] = os.freemem();
// 	else if(q == "platform")
// 		response[q] = os.platform();
//   } 
// 	res.send(JSON.stringify(response) +'\n');  
// });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
