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


  // this.getCustomers = function() {
  //   var promisse = $http({
  //       method : 'POST',
  //       url : '/CustomerManagementApp/customers/all'
  //   }).success(function(data, status, headers, config) {
  //       $log.log('Done');
  //       angular.forEach(data, function(c) {
  //           $log.log(c.firstName);
  //       });
  //       customers = data;
  //       return customers;
  //   });

  //   return promise;
  // };


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
