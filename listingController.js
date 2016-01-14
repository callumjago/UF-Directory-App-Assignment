angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.ind = undefined;
    

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      var entry = {
        code: $scope.code, 
        name: $scope.name,
        coordinates: {
          latitude: $scope.lat,
          longitude: $scope.long
        },
        address: $scope.address
      }
      $scope.listings.push(entry);
      
      $scope.code = '';
      $scope.name = '';
      $scope.lat = '';
      $scope.long = '';
      $scope.address = '';
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
     
     $scope.ind = index;
    };

    
  }
]);