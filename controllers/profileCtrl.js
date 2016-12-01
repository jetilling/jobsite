var app = require('../server'),
    db = app.get('db'),
    config = require('../config.json');

module.exports = {
  userData: function(req, res){
    db.get_user_data([req.params.id], function(err, users){
      if(err) console.log('profileCtrl.userData err: ', err);
      else res.status(200).send(users);
    })
  },

  myPostings: function(req, res){
    db.get_my_postings([req.params.id], function(err, jobs){
      if(err) console.log('profileCtrl.myPostings err: ', err)
      else res.status(200).send(jobs);
    })
  }
}
