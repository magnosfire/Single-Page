/**
 * Created by Renan on 26/04/2017.
 */

(function () {

    angular
        .module("app")
        .controller("aboutController", aboutController);

    function aboutController($scope) {

        var vm = this;

        vm.information = "A single-page application (SPA) is a web application or web site that fits on a single web page with the goal of providing a user experience similar to that of a desktop application. In an SPA, either all necessary code – HTML, JavaScript, and CSS – is retrieved with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does control transfer to another page, although the location hash or the HTML5 History API can be used to provide the perception and navigability of separate logical pages in the application. Interaction with the single page application often involves dynamic communication with the web server behind the scenes.";
        vm.pageTitle = "About";
        vm.title = "Single Page Application Project.";

    }


})();