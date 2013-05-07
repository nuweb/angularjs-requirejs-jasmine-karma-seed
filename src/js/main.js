require.config({
<<<<<<< HEAD
  paths: {
    angular: 'libs/angular',
    angularResource: 'libs/angular-resource'
  },
  shim: {
    'controllers/homeCtrl': {
      deps: ['app']
    },
    'controllers/aboutCtrl': {
      deps: ['app']
    },
    'angularResource': {
      deps: ['angular']
    },
    'app': {
      deps: ['angular', 'angularResource']
    },
    'bootstrap': {
      deps: ['app']
    },
    'routes': {
      deps: ['app']
    }
  }
});

require(['controllers/homeCtrl', 'controllers/aboutCtrl', 'routes'], function(){
  return angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });
});
=======
	paths: {
		jquery: '/components/jquery/jquery',
		bootstrap: '/components/bootstrap/js/bootstrap',
		angular: '/components/angular/angular',
		angularResource: '/components/angular-resource/angular-resource'
	},
	shim: {
		'angular': {'exports' : 'angular'},
		'angular-resource': {deps: ['angular']},
		'bootstrap': {deps: ['jquery']}
	},
	priority: [
		"angular"
	]
});

require([
	'angular',
	'app',
	'routes',
	'services/services',
	'controllers/controllers'
], function(angular, app, routes){
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['AngularSeed']);
	});
});
>>>>>>> 1eb65d34050ad8460e66f93ff4bf85a3d53f2678
