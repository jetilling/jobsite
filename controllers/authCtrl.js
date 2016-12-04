var app = require('../server'),
    db = app.get('db'),
    config = require('../config.json'),
    moment = require('moment'),
    jwt = require('jwt-simple'),
    bcrypt = require('bcrypt-nodejs');

function createJWT(user) {
  var payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(1, 'day').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}

function getSafeUser (user) {
  return {
    id: user.id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name
  }
}

module.exports = {
  getMe: function(req, res) {
    if (!req.user) return res.status(404);
    var user = req.user
    res.json(user)
  },

  login: function(req, res) {
        db.users.findOne({email: req.body.email}, function(err, user) {
            if (err) return res.status(500)
            if (!user) {
              return res.status(401).send({
                message: 'Invalid email and/or password'
              })
            }
            db.get_user_password([user.id], function(err, candidatePassword){
              db.comparePassword = function(candidatePassword, password, cb) {
                bcrypt.compare(candidatePassword, req.body.password, function(err, isMatch) {
                  cb(err, isMatch);
                });
              };
                res.send({
                token: createJWT(user),
                user: getSafeUser(user)
              })
            })
        })
  },

  signUp: function(req, res) {
    db.users.findOne({ email: req.body.email }, function(err, existingUser) {
      if (existingUser) {
        return res.status(409).send({ message: 'Email is already taken' });
      }
      else {
        bcrypt.genSalt(10, function(err, salt) {
          if (err) { return next(err); }
          bcrypt.hash(req.body.password, salt, null, function(err, hash) {
            if (err) { return next(err); }
            db.create_user([req.body.first_name, req.body.last_name, hash, req.body.email], function(err, users){
              db.users.findOne({email: req.body.email}, function(err, user){
                res.send({
                          token: createJWT(user),
                          user: getSafeUser(user)
                        });
              })
            })
          });

        });

      }
    });
  },

}
