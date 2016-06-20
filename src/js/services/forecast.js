/**
 * Created by ramar on 20/6/2016.
 */


angular.module('ProofOfConcept.services.Forecast', [])

    .factory('getWeather', function($http){
        return function(lat, lng, done) {
            console.log(lat);
            console.log(lng);
            $http({method: 'GET', url: 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid=39e45851c3990e3edeb2b4d0b1320d9b'})
                .success(function(data, status, headers, config) {
                    done(data.name, data.weather[0].description, lat, lng, data.id, data.main.temp);
                })
                .error(function(data, status, headers, config) {
                    throw new Error('Unable to get weather');
                });
        };
    });
