angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.detail = false;
    $scope.ind = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {};
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
     this.detail = !this.detail;
     $scope.ind = index;
    };
  }
]);