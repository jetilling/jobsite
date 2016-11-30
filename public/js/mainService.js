angular.module('jobSite').service('mainService', function($http){

  var user;
  var userInfo = function(userId){
    return $http({
      method: 'GET',
      url: '/api/userData/' + userId,
    }).then(function(response){
      user = response.data
    })
  }

  this.userData = function(){
    return $http({
      method: 'GET',
      url: '/api/me'
    }).then(function(response){
      var userId = response.data
      userInfo(userId)
    })
  }()



  this.createJob = function(title, description, startingBid, keywords, hours){
    var keyword = keywords.split(' ');
    var bid = Math.round(startingBid);
    return $http({
      method: 'POST',
      url: '/api/createJob',
      data: {userId: user[0].id, title: title, description: description, bid: bid, keyword: keyword, hours: hours}
    })
  }

})
