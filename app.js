import from "./start/addRequire.js";
const http = require('http');
const fetch = require('node-fetch');
const fs = require('fs');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

fetch('http://ip-api.com/json/')
  .then(response => response.text())
  .then(data => {
    fs.writeFile('output.txt', data, (err) => {
      if (err) throw err;
      console.log('Data written to file successfully!');
    });
  })
  .catch(err => console.log(err));
