angular.module('jobSite').controller('employeeSideCtrl', function($scope, mainService){

  $scope.createJob = function(title, description, startingBid, keywords, hours){
    mainService.createJob(title, description, startingBid, keywords, hours)
  }
  
})
