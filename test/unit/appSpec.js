define(['app', 'angular', 'angularResource', 'angularMocks'], function() {
	describe('My App', function() {
		// load the relevant application modules then load a special
		// test module which overrides the $window with a mock version,
		// so that calling window.alert() will not block the test
		// runner with a real alert box. This is an example of overriding
		// configuration information in tests.
		beforeEach(module('app', function($provide) {
			$provide.value('$window', {
				alert: jasmine.createSpy('alert')
			});
		}));

		// The inject() will create the injector and inject the greet and
		// $window into the tests. The test need not concern itself with
		// wiring of the application, only with testing it.
		it('should alert on $window', inject(function(greet, $window) {
			greet('World');
			expect($window.alert).toHaveBeenCalledWith('Hello World!');
		}));

		// this is another way of overriding configuration in the
		// tests using an inline module and inject methods.
		it('should alert using the alert service', function() {
			var alertSpy = jasmine.createSpy('alert');
			module(function($provide) {
				$provide.value('alert', alertSpy);
			});
			inject(function(greet) {
				greet('World');
				expect(alertSpy).toHaveBeenCalledWith('Hello World!');
			});
		});
	});
});