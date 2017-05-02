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
            .when("/singlepage/char", {
                templateUrl: 'character/characters.html',
                controller: "charactersController",
                controllerAs: "characters"
            })
            .when("/singlepage/", {
                templateUrl: 'about/about.html',
                controller: "aboutController",
                controllerAs: "about"
            })
            .when("/singlepage/markov", {
                templateUrl: 'markov/markov.html',
                controller: "markovController",
                controllerAs: "markov"
            })
            .otherwise({redirectTo:"/"});

    };


})();