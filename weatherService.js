(function() {
  'use strict';

  angular.module('my-app')
    .factory('WeatherService', WeatherService);

  function WeatherService($resource) {
    var url = 'http://api.openweathermap.org/data/2.5/weather';

    var paramDefaults = {
      appid: conf_appid,
      lat: 31.35,
      lon: 130.39
    }

    var weather = $resource(url, paramDefaults);

    return weather;
  }

  WeatherService.$inject = ['$resource'];
})();
