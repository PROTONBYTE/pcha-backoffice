'use strict';

/* App Routes */

var appRoutes = angular.module('appRoutes', [ 'ngRoute' ]);

appRoutes.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/servicecalls', {
        templateUrl: 'views/partial/servicecalls.html',
        controller: 'ServiceCallsController'
      }).
      otherwise({
        redirectTo: '/servicecalls'
      });
  }]);
