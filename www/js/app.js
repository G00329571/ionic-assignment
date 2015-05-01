// deifnes the angular appliction 'calCounter'and injects the 'calCounter controllers which will control the 'calCounter' application 
angular.module('calCounter', ['ionic', 'calCounter.controllers'])

//In our config block, we inject $stateProvider and $urlRouterProvider. These provide the basic blocks necessary to configure our application’s state machine.
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
// create an abstract state 'app' , the 'app' state can only be activated by its dependent 'foodlists' 
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
 // define a new 'foodlists' state as a child of 'app' using the routers dot notation
  .state('app.foodlists', {
      
    url: "/foodlists/:foodlistsId",
      
      // creates a view of the foodlist.html page which is controlled by the 'FoodlistsCtrl'
    views: {
      'menuContent': {
          templateUrl: "templates/foodlists.html",
          controller: 'FoodlistsCtrl'
             }
    }
  });
  // this will send any non valid url back to  the default url '/app/foodlists/1'.
  $urlRouterProvider.otherwise('/app/foodlists/1');
});
