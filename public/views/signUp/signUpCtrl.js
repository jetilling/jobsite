angular.module('jobSite').controller('signUpCtrl', function($scope, mainService, $auth, $state){

  $scope.mismatchedPasswords = false;
  $scope.existingEmail = false;

  $scope.create = function(first_name, last_name, password, confirmPassword, email){
    if (password === confirmPassword){
      $auth.signup({
        first_name: first_name,
        last_name: last_name,
        password: password,
        email: email
      }).then(function (response) {
        console.log("signUpCtrl:", response);
        setTimeout(function() {
          $scope.login(email, password);
        }, 500);
      }).catch(function (response) {
        console.log("signUpCtrl Error:", response);
        $scope.existingEmail = true
      });
    }
    else $scope.mismatchedPasswords = true
  }

  $scope.login = function(email, password) {
  $auth.login({
    email: email,
    password: password,
  }).then(function (response) {
    console.log("signUpCtrl:", response);
    if(response.status === 200){
      $auth.setToken(response)
      $state.go('profile');
    }
  }).catch(function (response) {
    console.log("signUpCtrl Error:", response);
  });
};


})
