/* eslint no-unused-vars: 0 */

'use strict';

var autocompleteModule = angular.module('autocompleteModule', ['ngMaterial', 'aiportModule']);
var datepickerModule = angular.module('datepickerModule', ['ngMaterial']);
var aiportModule = angular.module('aiportModule', []);
var app = angular.module('duvApp', ['autocompleteModule', 'datepickerModule']);
