(function () {
  "use strict";

  angular
    .module("CounterApp", [])
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope", "$timeout"];
  function CounterController($scope, $timeout) {
    $scope.counter = 0;
    // using angulaar time out
    $scope.upCounter = function () {
      $timeout(() => {
        $scope.counter++;
        console.log("counter increased");
      }, 2000);
    };

    // using $apply to call digest
    // $scope.upCounter = function () {
    //   setTimeout(() => {
    //     $scope.$apply(function () {
    //       $scope.counter++;
    //       console.log("counter increased");
    //     });
    //   }, 2000);
    // };
    // $scope.upCounter = function () {
    //   setTimeout(() => {
    //     $scope.counter++;
    //     console.log("counter increased");
    //     // for our counter to be calledwe have to call digest function manually
    //     $scope.$digest();
    //   }, 2000);
    // };
  }
})();
