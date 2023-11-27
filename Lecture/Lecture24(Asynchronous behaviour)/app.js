(function () {
  "use strict";

  angular
    .module("ShoppingListPromiseApp", [])
    .controller("ShoppingListController", ShoppingListController)
    .service("ShoppingListService", ShoppingListService)
    .service("WeightLossFilterService", WeightLossFilterService);

  ShoppingListController.$inject = ["ShoppingListService"];
  function ShoppingListController(ShoppingListService) {
    var list = this;

    list.items = ShoppingListService.getItems();

    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function () {
      ShoppingListService.addItem(list.itemName, list.itemQuantity);
    };

    list.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    };
  }
  // injecting WeightLossFilterService into our ShoppingListService
  ShoppingListService.$inject = ["$q", "WeightLossFilterService"];
  function ShoppingListService($q, WeightLossFilterService) {
    var service = this;

    // List of shopping items
    var items = [];
    // the service to add new item
    // service.addItem = function (name, quantity) {
    //   // checking the name using the weighlosfilterservice
    //   var promise = WeightLossFilterService.checkName(name);

    //   promise.then(
    //     function (response) {
    //       // checking the quantity using the weighlosfilterservice
    //       var nextPromise = WeightLossFilterService.checkQuantity(quantity);

    //       nextPromise.then(
    //         function (result) {
    //           var item = {
    //             name: name,
    //             quantity: quantity,
    //           };
    //           items.push(item);
    //         },
    //         function (errorResponse) {
    //           console.log(errorResponse.message);
    //         }
    //       );
    //     },
    //     function (errorResponse) {
    //       console.log(errorResponse.message);
    //     }
    //   );
    // };

    // adding service using the better code
    service.addItem = function (name, quantity) {
      var promise = WeightLossFilterService.checkName(name);
      promise
        .then(function (response) {
          return WeightLossFilterService.checkQuantity(quantity);
        })
        .then(function (response) {
          var item = {
            name: name,
            quantity: quantity,
          };
          items.push(item);
        })
        .catch(function (errorResponse) {
          console.log(errorResponse.message);
        });
    };
    // adding service using the better code
    // service.addItem = function (name, quantity) {
    //   var namePromise = WeightLossFilterService.checkName(name);
    //   var quantityPromise = WeightLossFilterService.checkQuantity(quantity);

    //   $q.all([namePromise, quantityPromise])
    //     .then(function (response) {
    //       var item = {
    //         name: name,
    //         quantity: quantity,
    //       };
    //       items.push(item);
    //     })
    //     .catch(function (errorResponse) {
    //       console.log(errorResponse.message);
    //     });
    // };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }

  WeightLossFilterService.$inject = ["$q", "$timeout"];
  // our WeightLossFilterService function
  function WeightLossFilterService($q, $timeout) {
    var service = this;
    // service to checkName
    service.checkName = function (name) {
      var deferred = $q.defer();

      var result = {
        message: "",
      };

      $timeout(function () {
        // Check for cookies
        if (name.toLowerCase().indexOf("cookie") === -1) {
          deferred.resolve(result);
        } else {
          result.message = "Stay away from cookies, Yaakov!";
          deferred.reject(result);
        }
      }, 3000);

      return deferred.promise;
    };
    // service to check quantity
    service.checkQuantity = function (quantity) {
      var deferred = $q.defer();
      var result = {
        message: "",
      };

      $timeout(function () {
        // Check for too many boxes
        if (quantity < 6) {
          deferred.resolve(result);
        } else {
          result.message = "That's too much, Yaakov!";
          deferred.reject(result);
        }
      }, 1000);

      return deferred.promise;
    };
  }
})();
