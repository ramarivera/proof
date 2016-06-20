
angular.module('ProofOfConcept.controllers.Main', [
    'ProofOfConcept.services.Geolocation',
    'ProofOfConcept.services.Forecast'
])
    .controller('MainController', function($scope, getCurrentPosition, getWeather){
        getCurrentPosition(function(position){
            getWeather(
                position.coords.latitude,
                position.coords.longitude,
                function(location, weather,lat,long,city, temp){
                    $scope.location = location;
                    $scope.weather = weather;
                    $scope.lat = lat;
                    $scope.long = long;
                    $scope.city= city;
                    $scope.temp = temp;
                });
        });
    });