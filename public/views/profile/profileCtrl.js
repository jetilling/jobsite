angular.module('jobSite').controller("profileCtrl", function($scope, $state, $auth, mainService){

  var posting;
  $scope.editModal = false;

  $scope.logout = function(){
    $auth.logout()
        .then(function() {
          console.log('You have been logged out');
          $state.go('landing');
    });
  }

mainService.userData()
.then(function(response){
  posting = response;
  $scope.postings = response;
});

$scope.edit = function(postingId){
  $scope.editModal = true;
  $scope.postings.forEach(function(item){
    if (item.id === postingId){
      $scope.editPost = item
    }
  })
}

})
