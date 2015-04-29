angular.module('calCounter.controllers', [])


.controller('AppCtrl', function($scope) {
 $scope.categories = ['Meat', 'Vegetable', 'Fruit', 'Fish & Poultry' , 'Drinks'];
  
})

.controller('FoodlistsCtrl', function($scope, $stateParams) {
    categories = ['Meat', 'Vegetable', 'Fruit', 'Fish&Poultry' , 'Drinks'];
    
    foodlists = [
    [
    {title: "Back bacon", imgsrc: "img/Meats/backbacon.jpg", calories: 125},
    {title: "Beef fillet", imgsrc: "img/Meats/beeffillet.jpg", calories: 140},   
    {title: "Pork sausage", imgsrc: "img/Meats/porksausage.jpg", calories: 200},   
    {title: "Pork chop", imgsrc: "img/Meats/porkchop.jpg", calories: 190},  
    {title: "Pork fillet", imgsrc: "img/Meats/porkfillet.jpg", calories: 246},   
    {title: "Roast beef", imgsrc: "img/Meats/roastbeef.jpg", calories: 294},   
    {title: "Roast lamb", imgsrc: "img/Meats/roastleglamb.jpg", calories: 165},  
    {title: "Sirlion steak", imgsrc: "img/Meats/sirlionsteak.jpg", calories: 289},   
    {title: "Streaky bacon", imgsrc: "img/Meats/streakybacon.jpg", calories: 320}    
        
     /* "Back bacon",
      "Beef fillet",
      "Pork sausage",
      "Pork chop",
       "Pork fillet",
      "Roast beef",
      "Roast lamb",
      "Sirlion steak",
       "Streaky bacon"*/
    ],
    [
        
    {title: "Asparagus", imgsrc: "img/Vegetables/asparagus.jpg", calories: 125},
    {title: "Broccoli", imgsrc: "img/Vegetables/broccoli.jpg", calories: 125},
    {title: "Onion", imgsrc: "img/Vegetables/onion.jpg", calories: 125},   
    {title: "Cabbage", imgsrc: "img/Vegetables/cabbage.jpg", calories: 125}, 
    {title: "Carrot", imgsrc: "img/Vegetables/carrot.jpg", calories: 125},  
    {title: "Courgette", imgsrc: "img/Vegetables/courgette.jpg", calories: 125},    
    {title: "Greenbeans", imgsrc: "img/Vegetables/greenbeans.jpg", calories: 125},  
    {title: "Parsnip", imgsrc: "img/Vegetables/parsnip.jpg", calories: 125}, 
    {title: "Red Pepper", imgsrc: "img/Vegetables/redpepper.jpg", calories: 125},
    {title: "Tomato", imgsrc: "img/Vegetables/tomato.jpg", calories: 125}
        
        
        /*"Asparagus",
      "Broccoli",
      "Onion",
      "Cabbage",
      "Carrot",
      "Courgette",
      "Greenbeans",
      "Parsnip",
      "Red pepper",
       "Tomato",*/
    ],
        
    [
        
    {title: "Apple", imgsrc: "img/Fruits/apple.jpg", calories: 78},
    {title: "Banana", imgsrc: "img/Fruits/banana.jpg", calories: 121},
    {title: "Blueberries", imgsrc: "img/Fruits/blueberries1.jpg", calories: 25},
    {title: "Kiwi", imgsrc: "img/Fruits/kiwi.jpg", calories: 76},
    {title: "Orange", imgsrc: "img/Fruits/orange.jpg", calories: 89},
    {title: "Peach", imgsrc: "img/Fruits/peach.jpg", calories: 109},
    {title: "Pear", imgsrc: "img/Fruits/pear.jpg", calories: 132},
    {title: "Pineapple", imgsrc: "img/Fruits/pineapple.jpg", calories: 105},
    {title: "Strawberry", imgsrc: "img/Fruits/strawberry.jpg", calories: 102}     
        
        
    /*  "Apple",
      "Banana",
      "Blueberries",
      "Kiwi",
      "Orange",
      "Peach",
      "Pear",
      "Pineapple",
      "Strawberry",*/

    ],
    [
        {title: "Chicken breast", imgsrc: "img/Fishs/chicken.jpg", calories: 135},
        {title: "Duck breast", imgsrc: "img/Fishs/duck.jpg", calories: 325},
        {title: "Lobster", imgsrc: "img/Fishs/lobster.jpg", calories: 225},
        {title: "Prawn", imgsrc: "img/Fishs/prawn.jpg", calories: 76},
        {title: "Salmon", imgsrc: "img/Fishs/salmon.jpg", calories: 134},
        {title: "Swordfish", imgsrc: "img/Fishs/swordfish.jpg", calories: 101},
        {title: "Tuna", imgsrc: "img/Fishs/tuna.jpg", calories: 138},
        {title: "Turkey", imgsrc: "img/Fishs/turkey.jpg", calories: 165}
     /* "Chicken breast",
      "Duck breast",
      "Lobster",
     "Prawn",
      "Salmon",
      "Swordfish",
      "Tuna",
      "Turkey",*/
         ],
    [
        {title: "Fizzy drink", imgsrc: "img/Drink/fizzydrink.jpg", calories: 625},
        {title: "Champagne", imgsrc: "img/Drink/champagne.jpg", calories: 175},
        {title: "Cider", imgsrc: "img/Drink/cider.jpg", calories: 525},
        {title: "Stout", imgsrc: "img/Drink/stout.jpg", calories: 333},
        {title: "White wine", imgsrc: "img/Drink/whitewine.jpg", calories: 420},
        {title: "Red wine", imgsrc: "img/Drink/redwine.jpg", calories: 203},
        {title: "Beer", imgsrc: "img/Drink/beer.jpg", calories: 179}
        
     /* "Fizzy drink",
      "Champagne",
      "Cider",
      "Beer",
      "Stout",
      "White wine",
      "Red wine",*/
     
    ]
 ];
    
 $scope.category = categories[$stateParams.foodlistsId];
    $scope.foodlists = foodlists[$stateParams.foodlistsId];
});
