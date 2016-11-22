angular.module('jobSite').controller('signUpCtrl', function($scope, mainService, $auth){
  $scope.create = function(name, password, confirmPassword, email){
    if (password === confirmPassword){
      $auth.signup({
        email: email,
        password: password,
        name: name
      }).then(function (response) {
        console.log("signUpCtrl:", response);
        $state.go('confirmLogin');
      }).catch(function (response) {
        console.log("signUpCtrl Error:", response);
        // window.alert('Error: Register failed');
      });
    }
  }


})
