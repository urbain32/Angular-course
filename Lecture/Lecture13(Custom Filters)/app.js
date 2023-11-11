(function () {
  "use strict";

  angular
    .module("MsgApp", [])
    .controller("MsgController", MsgController)
    // step 2 is calling our filter
    // loves is what our func will be called in angular
    .filter("loves", LovesFilter);

  MsgController.$inject = ["$scope", "$filter", "lovesFilter"];
  function MsgController($scope, $filter, lovesFilter) {
    $scope.name = "Yaakov";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = 0.45;

    $scope.sayMessage = function () {
      var msg = "Yaakov likes to eat healthy snacks at night!";
      var output = $filter("uppercase")(msg);
      return output;
    };
    $scope.sayLoveMessage = function () {
      var msg = "Yaakov likes to eat healthy snacks at night!";
      msg = lovesFilter(msg);
      return msg;
    };

    $scope.feedYaakov = function () {
      $scope.stateOfBeing = "fed";
    };
  }
  //step one creating the custom filter function
  function LovesFilter() {
    // the func must return another function
    return function (input) {
      input = input || "";
      input = input.replace("likes", "love");
      return input;
    };
  }
  function TruthFilter() {
    // the func must return another function
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }
})();
