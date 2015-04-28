angular.module('calCounter.controllers', [])


.controller('AppCtrl', function($scope) {
 $scope.categories = ['Meat', 'Vegetable', 'Fruit', 'Fish & Poultry' , 'Drinks'];
  
})

.controller('FoodlistsCtrl', function($scope, $stateParams) {
    categories = ['Meat', 'Vegetable', 'Fruit', 'Fish&Poultry' , 'Drinks'];
    
    foodlists = [
    [
    {title: "Back bacon", imgsrc: "img/Fruit/backbacon.jpg", calories: 125},
    {title: "Beef fillet", imgsrc: "img/Meat/beeffillet.jpg", calories: 140},   
    {title: "Pork sausage", imgsrc: "img/Meat/porksausage.jpg", calories: 200},   
    {title: "Pork chop", imgsrc: "img/Meat/porkchop.jpg", calories: 190},  
    {title: "Pork fillet", imgsrc: "img/Meat/porkfillet.jpg", calories: 246},   
    {title: "Roast beef", imgsrc: "img/Meat/roastbeef.jpg", calories: 294},   
    {title: "Roast lamb", imgsrc: "img/Meat/roastleglamb.jpg", calories: 165},  
    {title: "Sirlion steak", imgsrc: "img/Meat/sirlionsteak.jpg", calories: 289},   
    {title: "Streaky bacon", imgsrc: "img/Meat/streakybacon.jpg", calories: 320}    
        
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
        
    {title: "Apple", imgsrc: "img/Fruits/apple.jpg", calories: 125},
    {title: "Banana", imgsrc: "img/Fruits/banana.jpg", calories: 125},
    {title: "Blueberries", imgsrc: "img/Fruits/blueberries1.jpg", calories: 125},
    {title: "Kiwi", imgsrc: "img/Fruits/kiwi.jpg", calories: 125},
    {title: "Orange", imgsrc: "img/Fruits/orange.jpg", calories: 125},
    {title: "Peach", imgsrc: "img/Fruits/peach.jpg", calories: 125},
    {title: "Pear", imgsrc: "img/Fruits/pear.jpg", calories: 125},
    {title: "Pineapple", imgsrc: "img/Fruits/pineapple.jpg", calories: 125},
    {title: "Strawberry", imgsrc: "img/Fruits/strawberry.jpg", calories: 125}     
        
        
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
        {title: "Chicken breast", imgsrc: "img/Fish/chicken.jpg", calories: 125},
        {title: "Duck breast", imgsrc: "img/Fish/duck.jpg", calories: 125},
        {title: "Lobster", imgsrc: "img/Fish/lobster.jpg", calories: 125},
        {title: "Prawn", imgsrc: "img/Fish/prawn.jpg", calories: 125},
        {title: "Salmon", imgsrc: "img/Fish/salmon.jpg", calories: 125},
        {title: "Swordfish", imgsrc: "img/Fish/swordfish.jpg", calories: 125},
        {title: "Tuna", imgsrc: "img/Fish/tuna.jpg", calories: 125},
        {title: "Turkey", imgsrc: "img/Fish/turkey.jpg", calories: 125}
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
        {title: "Fizzy drink", imgsrc: "img/Drinks/fizzydrink.jpg", calories: 125},
        {title: "Champagne", imgsrc: "img/Drinks/champagne.jpg", calories: 125},
        {title: "Cider", imgsrc: "img/Drinks/cider.jpg", calories: 125},
        {title: "Stout", imgsrc: "img/Drinks/stout.jpg", calories: 125},
        {title: "White wine", imgsrc: "img/Drinks/whitewine.jpg", calories: 125},
        {title: "Red wine", imgsrc: "img/Drinks/redwine.jpg", calories: 125},
        {title: "Beer", imgsrc: "img/Drinks/beer.jpg", calories: 125}
        
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
