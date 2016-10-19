angular.module("app").controller("weatherCtrl", function($scope, mainService) {
    $scope.show = false;
    $scope.show2 = false;
    $scope.showWeather = function(place) {
        mainService.getWeather(place)
            .then(function(results) {
                console.log(results);
                $scope.data = results.main.temp;
                $scope.cityName = results.name;
                // $scope.show = true;
                $scope.weather = results.weather[0].description;

                if($scope.weather.includes("rain")) {
                  console.log('rain');
                  $(".modal-content").css({
                    'background-image': 'url("https://images.unsplash.com/photo-1417008914239-59b898b49382?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=185476e83f71b5e28e2e8845a312d1e6")'
                  }
                );
                }
                else if ($scope.weather.includes("clouds")) {
                  console.log('clouds');
                  $(".modal-content").css("background-image", "url(https://images.unsplash.com/photo-1440407876336-62333a6f010f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=aef01806defa8b0c87dd1243e2db2dba)");
                }
                else if($scope.weather.includes("clear")) {
                  console.log('clear');
                  $(".modal-content").css("background-image", "url(https://images.unsplash.com/photo-1430263326118-b75aa0da770b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=74d94b3d861f5334f9ae55001c6010cc)");
                }
                else if($scope.weather.includes("snow")) {
                  $(".modal-content").css("background-image", "url(https://images.unsplash.com/photo-1468476775582-6bede20f356f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=50c6901b794046c29f94700a8b940ad4)");
                }
                else if($scope.weather.includes("thunder")) {
                  console.log('clear');
                  $(".modal-content").css("background-image", "url(https://images.unsplash.com/photo-1461511669078-d46bf351cd6e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=7d70000aca951c4030093664ace2b986)");
                }
                else if($scope.weather.includes("mist")) {
                  console.log('clear');
                  $(".modal-content").css("background-image", "url(https://images.unsplash.com/photo-1431887773042-803ed52bed26?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=65b80c72d88022965f20b535b5411918)");
                }
                else {
                  console.log('else');
                  $(".modal-content").css({
                    "background-image": "url(https://images.unsplash.com/photo-1437239188634-1b06579eb5df?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=e101dc37c8cfe9430bf7aa1bac3c4e67)"
                  });
                }

                $scope.show2 = true;
                $scope.modalClose = function() {
                    $scope.show2 = false;
                };
            });
    };
});
