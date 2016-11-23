angular.module('jobSite').controller('landingCtrl', function($scope){

  $scope.getSearchResults = function($event, searchText){
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13){
      console.log(searchText);
    }
    // else console.log(searchText);
  }
})
