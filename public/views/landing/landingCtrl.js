angular.module('jobSite').controller('landingCtrl', function($scope){

  $scope.getSearchResultsByKey = function($event, searchText){
    var keyCode = $event.which || $event.keyCode;
    if (keyCode === 13){
      console.log(searchText);
    }
  }

  $scope.getSearchResultsByClick = function(searchText){
    console.log(searchText)
  }
})
