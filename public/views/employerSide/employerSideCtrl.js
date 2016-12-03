angular.module('jobSite').controller('employerSideCtrl', function($scope, mainService, $state){

  $scope.createJobB = function(title, description, startingBid, keywords, hours){
    mainService.createJobB(title, description, startingBid, keywords, hours)
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
