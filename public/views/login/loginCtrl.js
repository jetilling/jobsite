angular.module('jobSite').controller("loginCtrl", function($scope, $auth, $state, mainService){


//login function - response.data.token accesses token.
  $scope.logIn = function(email, password) {
      console.log(email, password);
    $auth.login({
      email: email,
      password: password,
    }).then(function (response) {
      console.log("loginCtrl:", response);
      mainService.userData = response.data.user
      if(response.status === 200){
        $auth.setToken(response)
        $state.go('profile');
      }
    }).catch(function (response) {
      console.log("loginCtrl Error:", response);
      // window.alert('Error: Register failed');
    });
  };


})
