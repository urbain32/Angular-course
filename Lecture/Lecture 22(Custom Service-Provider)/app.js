(function () {
  "use strict";

  angular
    .module("ShoppingListApp", [])
    .controller("ShoppingListController", ShoppingListController)
    // calling our provider
    .provider("ShoppingListService", ShoppingListServiceProvider)
    .config(Config);

  ShoppingListController.$inject = ["ShoppingListService"];
  function ShoppingListController(ShoppingListService) {
    var list = this;

    list.items = ShoppingListService.getItems();

    list.itemName = "";
    list.itemQuantity = "";

    list.addItem = function () {
      try {
        ShoppingListService.addItem(list.itemName, list.itemQuantity);
      } catch (error) {
        list.errorMessage = error.message;
      }
    };

    list.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    };
  }

  // If not specified, maxItems assumed unlimited
  function ShoppingListService(maxItems) {
    var service = this;

    // List of shopping items
    var items = [];

    service.addItem = function (itemName, quantity) {
      if (
        maxItems === undefined ||
        (maxItems !== undefined && items.length < maxItems)
      ) {
        var item = {
          name: itemName,
          quantity: quantity,
        };
        items.push(item);
      } else {
        throw new Error("Max items (" + maxItems + ") reached.");
      }
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }
  // creating the provider
  function ShoppingListServiceProvider() {
    var provider = this;

    provider.defaults = {
      // this will limit the number of our add items to 10
      maxItems: 10,
    };

    provider.$get = function () {
      var shoppingList = new ShoppingListService(provider.defaults.maxItems);

      return shoppingList;
    };
  }
})();
