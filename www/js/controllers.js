angular.module('calCounter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  
})

.controller('FoodlistsCtrl', function($scope, $stateParams) {
    
    $scope.dishesId = $stateParams.dishesId;
});
