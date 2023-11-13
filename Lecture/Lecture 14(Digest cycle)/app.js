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
      }, 2000);
    };
  }
})();
