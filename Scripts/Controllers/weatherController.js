angular.module("app").controller("weatherCtrl", function($scope, mainService){
  $scope.showWeather = function(place) {
    mainService.getWeather(place)
  .then(function(results) {
      $scope.data = results;
    });
  };
});
