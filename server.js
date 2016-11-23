var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    jwt = require('jwt-simple'),
    massive = require('massive'),
    moment = require('moment'),
    config = require('./config.json'),
    string = config.connectionString;


var db = massive.connectSync({connectionString: string})

var corsOptions = {
  origin: 'http://localhost:9001'
}

var app = module.exports = express();
app.set('db', db);
var authCtrl = require('./controllers/authCtrl.js');

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));

//----Login Required Middleware----//
function ensureAuthenticated(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
  }
  var token = req.header('Authorization').split(' ')[1];
  var payload = null;
  try {
    payload = jwt.decode(token, config.TOKEN_SECRET);
  }
  catch (err) {
    return res.status(401).send({ message: err.message });
  }
  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ message: 'Token has expired' });
  }
  req.user = payload.sub;
  next();
}

//----Endpoints----//
app.get('/api/me', ensureAuthenticated, authCtrl.getMe);
app.post('/auth/login', authCtrl.login);
app.post('/auth/signup', authCtrl.signUp);

var port = config.port
app.listen(port, function(){
  console.log('Got \'er listen\' on ', port)
})
