// (function (angular) {
//   'use strict';

//   angular
//     .module('autocompleteDemo', ['ngMaterial'])
//     .controller('DemoCtrl', DemoCtrl);

//   function DemoCtrl ($timeout, $q, $log) {
//     var self = this;
//     self.simulateQuery = false;
//     self.isDisabled    = false;
//     // list of `state` value/display objects
//     self.states        = loadAll();
//     self.querySearch   = querySearch;
//     self.selectedItemChange = selectedItemChange;
//     self.searchTextChange   = searchTextChange;
//     // ******************************
//     // Internal methods
//     // ******************************
//     /**
//      * Search for states... use $timeout to simulate
//      * remote dataservice call.
//      */
//     function querySearch (query) {
//       var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
//           deferred;
//       if (self.simulateQuery) {
//         deferred = $q.defer();
//         $timeout(function () {
//           deferred.resolve(results);
//         }, Math.random() * 1000, false);
//         return deferred.promise;
//       } else {
//         return results;
//       }
//     }
//     function searchTextChange (text) {
//       $log.info('Text changed to ' + text);
//     }
//     function selectedItemChange (item) {
//       $log.info('Item changed to ' + JSON.stringify(item));
//     }
//     /**
//      * Build `states` list of key/value pairs
//      */
//     function loadAll () {
//       var allStates = 'NYC, VCP, SAO, YVR, YYZ';
//       return allStates.split(/, +/g).map( function (state) {
//         return {
//           value: state.toLowerCase(),
//           display: state
//         };
//       });
//     }
//     /**
//      * Create filter function for a query string
//      */
//     function createFilterFor (query) {
//       var lowercaseQuery = angular.lowercase(query);
//       return function filterFn (state) {
//         return (state.value.indexOf(lowercaseQuery) === 0);
//       };
//     }
//   }
// })(window.angular);
