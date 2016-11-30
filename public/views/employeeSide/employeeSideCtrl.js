angular.module('jobSite').controller('employeeSideCtrl', function($scope, mainService, $state){

  $scope.createJob = function(title, description, startingBid, keywords, hours){
    mainService.createJob(title, description, startingBid, keywords, hours)
    .then(function(response){
      if (response.status === 200){
        swal(
          'Posted!',
          'Your job is posted for all to see!',
          'success'
        )
        $state.go('profile')
      }
    })
  }

})
