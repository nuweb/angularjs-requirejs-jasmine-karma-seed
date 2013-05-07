require.config({
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