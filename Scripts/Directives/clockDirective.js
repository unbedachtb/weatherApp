angular.module('app').directive('clock', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attr) {

            function update() {
                var now = moment().format('MMMM Do YYYY, h:mm:ss a');
                $('#datetime').html(now);
            }
            setInterval(update, 1000);
        }
    };
});
