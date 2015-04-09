angular.module('calCounter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  
})

.controller('FoodlistsCtrl', function($scope, $stateParams) {
    
    $stateParams.foodlistsId = $scope.foodlistsId;
});
