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
      redirectTo: '/home'
    });
  }
]);