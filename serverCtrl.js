var app = require('./server');
var db = app.get('db');

function createJWT(user) {
  var payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}

function getSafeUser (user) {
  return {
    id: user.id,
    email: user.email,
    display_name: user.display_name,
    follows: user.follows,
    savedStories: user.saved_stories
  }
}

module.exports = {
  getMe: function(req, res) {
    if (!req.user) return res.status(404);
    var user = req.user
    res.json(user)
  },

  authLogin: function(req, res) {
       db.users.findOne({email: req.body.email}, function(err, user) {
           if (err) return res.status(500)
           if (!user) {
             return res.status(401).send({
               message: 'Invalid email and/or password'
             })
           }

             db.compare_password([req.body.password, user.id], function(err, correct){

                 if(err) console.log(err);
                if(correct[0]['?column?']){
                  res.send({
                  token: createJWT(user),
                  user: getSafeUser(user)
                })
              }
                else res.status(401).send("Invalid email and/or password")
               })

     });
  },

  authSignUp: function(req, res) {
    db.users.findOne({ email: req.body.email }, function(err, existingUser) {
      if (existingUser) {
        return res.status(409).send({ message: 'Email is already taken' });
      }
      else {

          db.create_user([req.body.email, req.body.password, req.body.display_name], function(err, users){
            db.users.findOne({email: req.body.email}, function(err, user){
              console.log(user);
              res.send({
                        token: createJWT(user),
                        user: getSafeUser(user)
                      });
            })
          })
      }
    });
  },

}
