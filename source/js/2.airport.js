/* global aiportModule */

'use strict';

aiportModule.service('airportService', ['$http', function ($http) {

  var url = 'data/airports.json';
  var obj = {};

  obj.get = function () {
    return $http.get(url).then(function (results) {
      return results;
    });
  };

  return obj;
  // $http.get(url)
  //   .success(function (data, status, headers, config) {
  //     return data;
  //   })
  //   .error(function (data, status, headers, config) {
  //     // log error
  //   });
}]);


// angular.module("services", [])
//   .factory("square", ["factor", function (factor) {
//     return factor * factor;
//   }]);
