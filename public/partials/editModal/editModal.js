angular.module('jobSite').directive('editModal', function(){
  return {
    restrict: 'AE',
    templateUrl: './partials/editModal/editModal.html',

    controller: function($scope, mainService, $timeout){
      $scope.close = function() {
        $scope.editModal = false;
      }
    }
  }
});
