angular.module('jobSite').service('mainService', function($http){

  var userData;
  var userId;

  this.userData = function(){
    return $http({
      method: 'GET',
      url: '/api/me'
    }).then(function(response){
      userId = response.data
      console.log(userId)
    })
  }()


  this.createJob = function(title, description, startingBid, keywords, hours){
    var keyword = keywords.split(' ');
    var bid = Math.round(startingBid);
    return $http({
      method: 'POST',
      url: '/api/createJob',
      data: {userId: userId, title: title, description: description, bid: bid, keyword: keyword, hours: hours}
    })
    .then(function(response){
      console.log(response);
    })
  }

  this.userInfo = function(userId){
    console.log("inside function:", userId)
    return $http({
      method: 'GET',
      url: '/api/userData/' + userId,
    }).then(function(response){
      console.log(response)
    })
  }()

})
