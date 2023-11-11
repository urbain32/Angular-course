(function () {
  "use strict";

  angular.module("MsgApp", []).controller("MsgController", MsgController);

  MsgController.$inject = ["$scope", "$filter"];
  function MsgController($scope, $filter) {
    $scope.name = "Yaakov";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = 0.45;

    $scope.sayMessage = function () {
      var msg = "Yaakov likes to eat healthy snacks at night!";
      var output = $filter("uppercase")(msg);
      return output;
    };

    $scope.feedYaakov = function () {
      $scope.stateOfBeing = "fed";
    };
  }
  //step one creating the custom filter function
  function LoveFilter() {
    // the func must return another function
    return function () {};
  }
})();
