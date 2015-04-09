angular.module('calCounter.controllers', [])


.controller('AppCtrl', function($scope) {
 $scope.categories = ['Meat', 'Vegetable', 'Fruit', 'Fish & Poultry' , 'Drinks'];
  
})

.controller('FoodlistsCtrl', function($scope, $stateParams) {
    categories = ['Meat', 'Vegetable', 'Fruit', 'Fish&Poultry' , 'Drinks'];
    
    foodlists = [
    [
      "Back bacon",
      "Beef fillet",
      "Pork sausage",
      "Pork chop",
       "Pork fillet",
      "Roast beef",
      "Roast lamb",
      "Sirlion steak",
       "Streaky bacon"
    ],
    [
      "Asparagus",
      "Broccoli",
      "Onion",
      "Cabbage",
      "Carrot",
      "Courgette",
      "Greenbeans",
      "Parsnip",
      "Red pepper",
       "Tomato",
    ],
    [
      "Apple",
      "Banana",
      "Blueberries",
      "Kiwi",
      "Orange",
      "Peach",
      "Pear",
      "Pinepple",
      "Strawberry",

    ],
    [
      "Chicken breast",
      "Duck breast",
      "Lobster",
     "Prawn",
      "Salmon",
      "Swordfish",
      "Tuna",
      "Turkey",
         ],
    [
        
      "Fizzy drink",
      "Champagne",
      "Cider",
      "Beer",
      "Stout",
      "White wine",
      "Red wine",
     
    ]
 ];
    
 $scope.category = categories[$stateParams.foodlistsId];
    $scope.foodlists = foodlists[$stateParams.foodlistsId];
});
