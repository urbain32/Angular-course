(function () {
  "use strict";

  angular
    .module("ShoppingListApp", [])
    .controller("ShoppingListAddController", ShoppingListAddController)
    .controller("ShoppingListShowController", ShoppingListShowController)
    .service("ShoppingListService", ShoppingListService);

  ShoppingListAddController.$inject = ["ShoppingListService"];
  function ShoppingListAddController(ShoppingListService) {
    var itemAdder = this;

    itemAdder.itemName = "";
    itemAdder.itemQuantity = "";

    itemAdder.addItem = function () {
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    };
  }

  ShoppingListShowController.$inject = ["ShoppingListService"];
  function ShoppingListShowController(ShoppingListService) {
    // we "this" so that we can attach it to other variable
    var showList = this;

    showList.items = ShoppingListService.getItems();
  }

  function ShoppingListService() {
    var service = this;

    // List of shopping items
    var items = [];

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity,
      };
      items.push(item);
    };
    // function to remove items
    service.removeItem = function (itemIndex) {};

    service.getItems = function () {
      return items;
    };
  }
})();
