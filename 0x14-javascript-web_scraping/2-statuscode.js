#!/usr/bin/node

const request = require('request');

request.get('https://swapi.co/api/films/' + process.argv[2], function (err, res, body) {
  if (err) console.log(err);
  else console.log('code: ' + res.statusCode);
});
