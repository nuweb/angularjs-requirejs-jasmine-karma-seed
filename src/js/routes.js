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
      redirectTo: '/home'
    });
  }]);
});