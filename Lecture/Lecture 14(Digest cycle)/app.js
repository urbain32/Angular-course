(function () {
  "use strict";

  angular
    .module("CounterApp", [])
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope"];
  function CounterController($scope) {
    $scope.onceCount = 0;
    $scope.showNumberOfWatchers = function () {
      console.log("Number of watchers:", $scope.$$watchersCount);
    };
  }
})();
