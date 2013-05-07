module.exports = function(grunt) {

	//	Initialize the grunt tasks
	grunt.initConfig({
		jasmine : {
			src : 'src/js/app.js',
			options: {
				specs : 'test/unit/appSpec.js',
				vendor: [
					'src/components/angular/angular.js',
					'src/components/angular-resource/angular-resource.js',
					'src/components/angular-mocks/angular-mocks.js'
				]
			}
		}
	});

	//	Load the plugins that provide the tasks we specified in package.json
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	//	Setup the default task
	grunt.registerTask('default', ['jasmine']);

};