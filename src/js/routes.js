define(['app', 'controllers/controllers'], function(app, controller){
  return app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
  }]);
});