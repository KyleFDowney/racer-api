  var myApp = angular.module('myApp', []);



  myApp.controller('myController', function($scope, $http) {
      $http.get('data/driverStandings.json').then(function(response) {
      $scope.apiData = response.data;
      $scope.column = '';
    });
  });


// (function(){
// myApp.controller("MyController", ['$scope','$http', function($scope,$http){
//   $http.get('data/driverStandings.json').then(function(results){
//     $scope.apiData = results.data;
//   })
// }]);
// });
