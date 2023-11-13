(function () {
  "use strict";

  angular
    .module("CounterApp", [])
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope"];
  function CounterController($scope) {
    $scope.counter = 0;
    $scope.upCounter = function () {
      $scope.counter++;
    };
    // the way to watch which digist cycle is fired
    $scope.$watch(function () {
      console.log("Digest loop fired");
    });
  }
})();
