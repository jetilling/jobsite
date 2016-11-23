angular.module('jobSite').controller("profileCtrl", function($scope, $state, $auth, mainService){

  $scope.logout = function(){
    $auth.logout()
        .then(function() {
          console.log('You have been logged out');
          $state.go('landing');
    });
  }

})
