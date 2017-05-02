/**
 * Created by Renan on 25/04/2017.
 */

(function () {

    "use strict";

    angular
        .module("app")
        .controller("charactersController",charactersController);

    function charactersController($scope) {

        var vm = this;


        vm.characters = [
            {name: "John Snow", role:"Bastard", gender: "Male"},
            {name: "Daenerys Targaryen", role:"Mother of Dragons", gender: "Female"},
            {name: "Tyrion Lannister", role:"Imp", gender: "Male"},
            {name: "Eddard Stark", role:"Lord of Winterfell", gender: "Male"},
            {name: "Robert Baratheon", role:"King", gender: "Male"}
        ]

    }


})();