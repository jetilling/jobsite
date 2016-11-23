angular.module('jobSite').controller("profileCtrl", function($scope, $state, $auth){

  $scope.logout = function(){
    $auth.logout()
        .then(function() {
          console.log('You have been logged out');
          $state.go('landing');
    });
  }
})
