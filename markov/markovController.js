/**
 * Created by Renan on 01/05/2017.
 */

(function () {

    'use strict';

    angular
        .module('app')
        .controller('markovController', markovController);

    markovController.$inject = ['$scope','markovService'];

    function markovController ($scope,markovService) {
        var vm = this;

        vm.clear = clearForm;
        vm.markovFunc = functionString;


        function functionString() {

            if(vm.markovString) {

                let arr = vm.markovString.split(' ').join('').toLowerCase();
                let total = vm.markovString.split(' ').join('').length;
                let countVowelFollowedByVowel = markovService.stringAnalyze(arr);

                vm.vowelFollowedByVowel = markovService.percentFollowedByVowel(countVowelFollowedByVowel, total);
                vm.vowelFollowedByConsonant = markovService.percentFollowedByConsonant(countVowelFollowedByVowel, total);

            }
            else{

            }

        };

        function clearForm() {

            vm.vowelFollowedByVowel = null;
            vm.vowelFollowedByConsonant = null;
            vm.markovString = "";

        };

    };

})();
