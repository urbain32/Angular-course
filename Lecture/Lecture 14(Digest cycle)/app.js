(function () {
  "use strict";

  angular
    .module("CounterApp", [])
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope"];
  function CounterController($scope) {
    $scope.onceCounter = 0;
    $scope.counter = 0;
    $scope.showNumberOfWatchers = function () {
      console.log("Number of watchers:", $scope.$$watchersCount);
    };
    $scope.countOnce = function () {
      $scope.onceCounter = 1;
    };
    $scope.upCounter = function () {
      $scope.counter++;
    };
    $scope.$watch("onceCounter", function (newValue, oldValue) {
      console.log("Old value:", oldValue);
      console.log("New value:", newValue);
    });
    $scope.$watch("counter", function (newValue, oldValue) {
      console.log("Old value:", oldValue);
      console.log("New value:", newValue);
    });
  }
})();
