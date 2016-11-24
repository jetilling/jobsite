var app = require('../server'),
    db = app.get('db'),
    config = require('../config.json');

module.exports = {
  userData: function(req, res){
    db.get_user_data([req.params.id], function(err, users){
      if(err) console.log(err);
      else res.status(200).send(users);
    })
  },

  createJob: function(req, res){
    db.create_job([req.body.userId, req.body.title, req.body.description, req.body.bid, req.body.keyword, req.body.hours], function(err, jobs){
      if(err) console.log(err);
      else res.status(200).send(jobs);
    })
  }
}
