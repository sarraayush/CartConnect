const http = require('http');

// const express = require('express');
// const app = express();

const app = require('./app');


const port = process.env.PORT || 3000;

// app.use(app2);

const server = http.createServer(app);

console.log(port);
server.listen(port);