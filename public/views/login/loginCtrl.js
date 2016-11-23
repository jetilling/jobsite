angular.module('jobSite').controller("loginCtrl", function($scope, $auth, $state){

  $scope.logIn = function(email, password) {
      console.log(email, password);
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
      // window.alert('Error: Register failed');
    });
  };


})
