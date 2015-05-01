angular.module('calCounter.controllers', [])

/** defines AppCtrl as the controller, the scope of the controller is the data from the categories*/

.controller('AppCtrl', function($scope) {
 $scope.categories = ['Meat', 'Vegetable', 'Fruit', 'Fish & Poultry' , 'Drinks'];
  
})
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */

.factory('Projects', function() {
  return {
    all: function() {
      var projectString = window.localStorage['projects'];
      if(projectString) {
        return angular.fromJson(projectString);
      }
      return [];
    },
    save: function(projects) {
      window.localStorage['projects'] = angular.toJson(projects);
    },
    newProject: function(projectTitle) {
      // Add a new project
      return {
        title: projectTitle,
        tasks: []
      };
    },
      
    getLastActiveIndex: function() {
      return parseInt(window.localStorage['lastActiveProject']) || 0;
    },
      
    setLastActiveIndex: function(index) {
      window.localStorage['lastActiveProject'] = index;
    }
  }
})


.controller('FoodlistsCtrl', function($scope,$rootScope,Projects, $stateParams) {
    $rootScope.count = 0;
    
    categories = ['Meat', 'Vegetable', 'Fruit', 'Fish&Poultry' , 'Drinks'];
    
  
    
    $scope.function1 = function(calories){
        
        $rootScope.count = $scope.count + calories;
        Projects.save($rootScope.count);
    };
    // clears the current calorie count when clear button is clicked 
    $scope.functionClear = function(){
        $rootScope.count = 0;
    };
    

    // adds all the foods, images and calories from the five cateogries to the states 
    foodlists = [
    [
    {title: "Back bacon 100g", imgsrc: "img/Meats/backbacon.jpg", calories: 157},
    {title: "Beef fillet 112g", imgsrc: "img/Meats/beeffillet.jpg", calories: 168},   
    {title: "Pork sausage 100g", imgsrc: "img/Meats/porksausage.jpg", calories: 301},   
    {title: "Pork chop 100g", imgsrc: "img/Meats/porkchop.jpg", calories: 231},  
    {title: "Pork fillet 150g", imgsrc: "img/Meats/porkfillet.jpg", calories: 216},   
    {title: "Roast beef 100g", imgsrc: "img/Meats/roastbeef.jpg", calories: 267},   
    {title: "Roast lamb 100g", imgsrc: "img/Meats/roastleglamb.jpg", calories: 258},  
    {title: "Sirlion steak 112g", imgsrc: "img/Meats/sirlionsteak.jpg", calories: 162},   
    {title: "Streaky bacon 100g", imgsrc: "img/Meats/streakybacon.jpg", calories: 541}    
        
    ],
        
    [
        
    {title: "Asparagus 100g", imgsrc: "img/Vegetables/asparagus.jpg", calories: 20},
    {title: "Broccoli 100g", imgsrc: "img/Vegetables/broccoli.jpg", calories: 34},
    {title: "Onion 100g", imgsrc: "img/Vegetables/onion.jpg", calories: 40},   
    {title: "Cabbage 100g", imgsrc: "img/Vegetables/cabbage.jpg", calories: 25}, 
    {title: "Carrot 100g", imgsrc: "img/Vegetables/carrot.jpg", calories: 41},  
    {title: "Courgette 100g", imgsrc: "img/Vegetables/courgette.jpg", calories: 17},    
    {title: "Greenbeans 100g", imgsrc: "img/Vegetables/greenbeans.jpg", calories: 31},  
    {title: "Parsnip 100g", imgsrc: "img/Vegetables/parsnip.jpg", calories: 76}, 
    {title: "Red Pepper 100g", imgsrc: "img/Vegetables/redpepper.jpg", calories: 40},
    {title: "Tomato 100g", imgsrc: "img/Vegetables/tomato.jpg", calories: 18}
        
        
       
    ],
        
    [
        
    {title: "Apple 100g", imgsrc: "img/Fruits/apple.jpg", calories: 52},
    {title: "Banana 100g", imgsrc: "img/Fruits/banana.jpg", calories: 89},
    {title: "Blueberries 100g", imgsrc: "img/Fruits/blueberries1.jpg", calories: 57},
    {title: "Kiwi 100g", imgsrc: "img/Fruits/kiwi.jpg", calories: 61},
    {title: "Orange 100g", imgsrc: "img/Fruits/orange.jpg", calories: 47},
    {title: "Peach 100g", imgsrc: "img/Fruits/peach.jpg", calories: 39},
    {title: "Pear 100g", imgsrc: "img/Fruits/pear.jpg", calories: 57},
    {title: "Pineapple 100g", imgsrc: "img/Fruits/pineapple.jpg", calories: 50},
    {title: "Strawberry 100g", imgsrc: "img/Fruits/strawberry.jpg", calories: 33}     
        
        
    ],
        
    [
        {title: "Chicken breast 130g", imgsrc: "img/Fishs/chicken.jpg", calories: 192},
        {title: "Duck breast 100g", imgsrc: "img/Fishs/duck.jpg", calories: 194},
        {title: "Lobster 100g", imgsrc: "img/Fishs/lobster.jpg", calories: 89},
        {title: "Prawn 75g", imgsrc: "img/Fishs/prawn.jpg", calories: 54},
        {title: "Salmon 100g", imgsrc: "img/Fishs/salmon.jpg", calories: 215},
        {title: "Swordfish 100g", imgsrc: "img/Fishs/swordfish.jpg", calories: 172},
        {title: "Tuna 100g", imgsrc: "img/Fishs/tuna.jpg", calories: 184},
        {title: "Turkey 90g", imgsrc: "img/Fishs/turkey.jpg", calories: 138}
     
         ],
        
    [
        {title: "Fizzy drink 330ml", imgsrc: "img/Drink/fizzydrink.jpg", calories: 139},
        {title: "Glass of Champagne", imgsrc: "img/Drink/champagne.jpg", calories: 90},
        {title: "Bottle of Cider", imgsrc: "img/Drink/cider.jpg", calories: 92},
        {title: "Bottle of Stout", imgsrc: "img/Drink/stout.jpg", calories: 99},
        {title: "Glass of White Wine", imgsrc: "img/Drink/whitewine.jpg", calories: 123},
        {title: "Glass of Red Wine", imgsrc: "img/Drink/redwine.jpg", calories: 125},
        {title: "Bottle of Beer", imgsrc: "img/Drink/beer.jpg", calories: 154}
        
    
    ]
 ];
    
 $scope.category = categories[$stateParams.foodlistsId];
    $scope.foodlists = foodlists[$stateParams.foodlistsId];
});
