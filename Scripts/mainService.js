angular.module("app").service("mainService", function($http){
  this.getWeather = function(place) {
    return $http({
      method: 'GET',
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=imperial&APPID=4db8f2b00e243ed55645fd281f05a799"
    }).then(function(results) {
      return results.data;
    });
  };
});
