/**
 * Created by Renan on 25/04/2017.
 */

(function () {

    "use strict";
    
    angular
        .module("app")
        .controller("shoppingController", shoppingController);

    shoppingController.$inject = ["$scope"];
    
    function shoppingController($scope) {
        
        var vm = this;
        
        $scope.products = ["Milk","Breads","Cheese"];
        $scope.addItem = function () {

            $scope.errortext = "";
            if(!$scope.addMe){
                return;
            }
            if($scope.products.indexOf($scope.addMe) == -1){
                $scope.products.push($scope.addMe);
            } else{
                $scope.errortext = "The item is already in your shopping list.";
            }


        };

        $scope.removeItem = function (x) {
            $scope.errortext = "";
            $scope.products.splice(x, 1);
        };
        
        
    }
    
    
})();