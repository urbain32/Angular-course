(function () {
  "use strict";

  angular
    .module("CounterApp", [])
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope"];
  function CounterController($scope) {
    $scope.counter = 0;
    $scope.upCounter = function () {
      setTimeout(() => {
        $scope.counter++;
        console.log("counter increased");
        // for our counter to be calledwe have to call digest function manually
        $scope.$digest();
      }, 2000);
    };
  }
})();
