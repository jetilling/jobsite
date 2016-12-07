angular.module('jobSite').controller("profileCtrl", function($scope, $state, $auth, mainService){

  var posting;
  $scope.editModal = false

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
  posting = response[0];
  $scope.postings = response[0];
});

$scope.edit = function(postingId){
  console.log(postingId)
}

})
