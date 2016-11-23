angular.module('jobSite', ['ui.router', 'satellizer'])
.config(function($stateProvider, $urlRouterProvider, $authProvider){
  $urlRouterProvider.otherwise('/')

  var skipIfLoggedIn = ['$q', '$location', '$auth', function($q, $location, $auth) {
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    $location.path('/dashboard')
  } else {
    console.log('hey');
    deferred.resolve();
  }
  return deferred.promise;
}];

  var loginRequired = ['$q', '$location', '$auth', function($q, $location, $auth) {
      var deferred = $q.defer();
      if ($auth.isAuthenticated()) {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }];

  $stateProvider
  .state('landing', {
        url: '/',
          views: {
            "main@": {
              controller: 'landingCtrl',
              templateUrl: './views/landing/landing.html'
          }
        }
  })
  .state('login', {
        url: '/login',
          views: {
            "main@": {
              controller: 'loginCtrl',
              templateUrl: './views/login/login.html'
          }
        }
  })
  .state('signUp', {
        url: '/signUp',
          views: {
            "main@": {
              controller: 'signUpCtrl',
              templateUrl: './views/signUp/signUp.html'
          }
        }
  })
  .state('profile', {
        url: '/profile',
          views: {
            "main@": {
              controller: 'profileCtrl',
              templateUrl: './views/profile/profile.html'
          }
        }
  })
  .state('profile.purchaseTokens', {
        url: '/purchaseTokens',
          views: {
            "profile@profile": {
              controller: 'purchaseTokensCtrl',
              templateUrl: './views/purchaseTokens/purchaseTokens.html'
          }
        }
  })

  $authProvider.loginUrl = '/auth/login';
  $authProvider.signupUrl = '/auth/signup';
})
