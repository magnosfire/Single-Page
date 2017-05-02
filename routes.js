/**
 * Created by Renan on 26/04/2017.
 */

(function () {

    angular
        .module("app")
        .config(config);

    config.$inject = ["$routeProvider", "$locationProvider"];

    function config($routeProvider, $locationProvider) {

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider
            .when("/char", {
                templateUrl: 'character/characters.html',
                controller: "charactersController",
                controllerAs: "characters"
            })
            .when("/", {
                templateUrl: 'about/about.html',
                controller: "aboutController",
                controllerAs: "about"
            })
            .when("/markov", {
                templateUrl: 'markov/markov.html',
                controller: "markovController",
                controllerAs: "markov"
            })/*
            .when("/avengers", {
                templateUrl: 'templates/avengers.html',
                controller: "avengerController",
                controllerAs: "avenger"
            })*/
            .otherwise({redirectTo:"/"});

    };


})();