angular.module('app').directive('hello', function() {
  return {
    templateUrl: './Views/helloDirective.html',
    link: function(scope, elem, attr) {
      //if .weather contains 'rainy' then insert this backgroun image
// var weather = $("scope.weather");
// console.log(scope.weather);
//       if(scope.weather.includes("rain")) {
//         $(".modal-content").css("background", "url(https://images.unsplash.com/photo-1417008914239-59b898b49382?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=185476e83f71b5e28e2e8845a312d1e6) cover");
//       }
//       else if (scope.weather.includes("clouds")) {
//         $(".modal-content").css("background", "url(https://images.unsplash.com/photo-1438045809872-34a58ff469f6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=88bf0452a0e6e3b9e855ba4e2945048f) cover");
//       }
//       else if(scope.weather.includes("clear")) {
//         $(".modal-content").css("background", "url(https://images.unsplash.com/photo-1430263326118-b75aa0da770b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=74d94b3d861f5334f9ae55001c6010cc) cover");
//       }
//       else {
//         $(".modal-content").css("background", "url(https://images.unsplash.com/photo-1464375679469-e3b5b25b8943?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=87cc284420e5db6025c786ecbd1a43ce) cover");
//       }
    }
  };
});
