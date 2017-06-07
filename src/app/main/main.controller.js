(function () {
  'use strict';

  angular
    .module('angularjs.tableau.demo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
    var vm = this;

    vm.visualizations = [];

    $scope.filterObj = {
      'Msa Id': "2"
    };

    $scope.myCallback = function (results) {
      console.log('test callback');
      console.log(results);
    }

    activate();

    function activate() {
      vm.visualizations = [
        {
          title: 'Sample visualization 1',
          path: 'https://public.tableau.com/views/USMassShooting2013-2015TrendsPerState/Story1'
        }
      ]
    }

  }
})();
