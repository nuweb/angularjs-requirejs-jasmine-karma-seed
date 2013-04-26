// CNID Bootstrap: Alias configuration

require.config({
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
