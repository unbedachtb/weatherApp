angular.module("app").controller("weatherCtrl", function($scope, mainService){
  $scope.show = false;
  $scope.showWeather = function(place) {
    mainService.getWeather(place)
  .then(function(results) {
    console.log(results);
      $scope.data = results.main.temp;
      $scope.cityName = results.name;
      $scope.show = true;
      $scope.weather = results.weather[0].description;
    });
  };
});
