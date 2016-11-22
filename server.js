var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    jwt = require('jwt-simple'),
    massive = require('massive'),
    moment = require('moment'),
    config = require('./config.json'),
    serverCtrl = require('./serverCtrl.js'),
    string = config.connectionString;


var db = massive.connectSync({connectionString: string})

var corsOptions = {
  origin: 'http://localhost:9001'
}

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));

var port = config.port
app.listen(port, function(){
  console.log('Got \'er listen\' on ', port)
})
