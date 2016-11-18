var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    jwt = require('jwt-simple');

var app = module.exports = express();

app.use(bodyParser.json());

app.listen(9001, function(){
  console.log('Got \'er listen\' on 9001')
})
