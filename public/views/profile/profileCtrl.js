angular.module('jobSite').controller("profileCtrl", function($scope, $state, $auth, mainService){

  $scope.logout = function(){
    $auth.logout()
        .then(function() {
          console.log('You have been logged out');
          $state.go('landing');
    });
  }

  // $scope.myPostings = function(){
  //   mainService.myPostings()
  //   .then(function(response){
  //     console.log(response)
  //   })
  // }()

  // mainService.myPostings()
//
mainService.userData()
.then(function(response){
  $scope.postings = response[0];
});


})
