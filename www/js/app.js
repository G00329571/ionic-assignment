
angular.module('calCounter', ['ionic', 'calCounter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.foodlists', {
    url: "/foodlists/:foodlistsId",
    views: {
      'menuContent': {
          templateUrl: "templates/foodlists.html",
          controller: 'FoodlistsCtrl'
             }
    }
  });
  
  $urlRouterProvider.otherwise('/app/foodlists/1');
});
