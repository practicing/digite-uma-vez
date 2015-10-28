/* global datepickerModule */

'use strict';

datepickerModule.controller('datepickerController', ['$scope', function ($scope) {
  $scope.origDate = new Date();
  $scope.origDate = new Date(
    $scope.origDate.getFullYear(),
    $scope.origDate.getMonth(),
    $scope.origDate.getDate());
  $scope.destDate = new Date(
    $scope.origDate.getFullYear(),
    $scope.origDate.getMonth(),
    $scope.origDate.getDate() + 1);
}]);
