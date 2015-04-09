angular.module('calCounter.controllers', [])


.controller('AppCtrl', function($scope) {
 $scope.categories = ['Meat', 'Vegetable', 'Fruit', 'Fish & Poultry' , 'Drinks'];
  
})

.controller('FoodlistsCtrl', function($scope, $stateParams) {
    categories = ['Meat', 'Vegetable', 'Fruit', 'Fish&Poultry' , 'Drinks'];
    
    foodlists = [
    [
      "back bacon",
      "beef fillet",
      "pork sausage",
      "pork chop",
       "pork fillet",
      "roast beef",
      "roast lamb",
      "sirlion steak",
       "streaky bacon"
    ],
    [
      "asparagus",
      "broccoli",
      "onion",
      "cabbage",
      "carrot",
      "courgette",
      "greenbeans",
      "parsnip",
      "red pepper",
       "tomato",
    ],
    [
      "apple",
      "banana",
      "blueberries",
      "kiwi",
      "orange",
      "peach",
      "pear",
      "pinepple",
      "strawberry",

    ],
    [
      "chicken breast",
      "duck breast",
      "lobster",
     "prawn",
      "salmon",
      "swordfish",
      "tuna",
      "turkey",
         ],
    [
        
      "fizzy drink",
      "champagne",
      "cider",
      "beer",
      "stout",
      "white wine",
      "red wine",
     
    ]
 ];
    
 $scope.category = categories[$stateParams.foodlistsId];
    $scope.foodlists = foodlists[$stateParams.foodlistsId];
});
