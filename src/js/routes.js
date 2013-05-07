<<<<<<< HEAD
angular.module('app').config([
  '$routeProvider', function($routeProvider) {
    console.log($routeProvider);
    return $routeProvider.when('/home', {
      controller: 'homeCtrl',
      templateUrl: 'views/home.html'
    }).when('/about', {
      controller: 'aboutCtrl',
      templateUrl: 'views/about.html'
    }).otherwise({
=======
define([
  'app',
  'controllers/controllers'
], function(app, controller){
  return app.config(['$routeProvider', function($routeProvider){
    console.log("$routeProvider: ");
    console.log($routeProvider);
    $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/about', {
      templateUrl: '/views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
>>>>>>> 1eb65d34050ad8460e66f93ff4bf85a3d53f2678
      redirectTo: '/home'
    });
  }
]);
