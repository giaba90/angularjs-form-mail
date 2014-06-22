'use strict';


// Declare app level module which depends on filters, and services
angular.module('angularjsFormMailApp', [
  'ngRoute',
  'angularjsFormMailApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/contactForm.html', controller: 'MyCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
