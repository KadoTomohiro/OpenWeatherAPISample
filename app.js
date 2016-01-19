(function() {
  'use strict';

  angular
    .module('my-app', ['ngResource'])
    .controller('WeatherController', WeatherController)

  function WeatherController(WeatherService) {
    vm = this;

    vm.WeatherService = WeatherService;

    var weather = vm.WeatherService.get().$promise;

    weather
      .then(showWeather)
      .catch(error);

  }

  var vm;

  var showWeather = function(weather) {
    vm.weather = weather;
  }

  var error = function(e) {
    vm.error = e;
  };

  WeatherController.$inject = ['WeatherService'];

})();
