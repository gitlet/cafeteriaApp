var app = angular.module("CafeteriaApp", []);

app.controller("CafeteriaCtrl", function($scope) {
  $scope.fname = "";
  $scope.lname = "";
  $scope.fullName = function() {
    return $scope.fname + " " + $scope.lname;
  };
});
