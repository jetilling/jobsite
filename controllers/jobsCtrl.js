var app = require('../server'),
    db = app.get('db'),
    config = require('../config.json');

module.exports = {
  createJob: function(req, res){
    db.create_job([req.body.userId, req.body.title, req.body.description, req.body.bid, req.body.keyword, req.body.hours], function(err, jobs){
      if(err) console.log(err);
      else res.status(200).send(jobs);
    })
  },

  createJobB: function(req, res){
    db.create_job_B([req.body.userId, req.body.title, req.body.description, req.body.bid, req.body.keyword, req.body.hours], function(err, jobsB){
      if(err) console.log(err);
      else res.status(200).send(jobsB);
    })
  }
}
