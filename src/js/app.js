angular.module('app', ['ngResource']).
factory('alert', function($window) {
    return function(text) {
		$window.alert(text);
    };
}).
value('salutation', 'Hello').
factory('greet', function(alert, salutation) {
	return function(name) {
		alert(salutation + ' ' + name + '!');
	};
});