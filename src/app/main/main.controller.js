(function() {
  'use strict';

  angular
    .module('com.effectiveui.tableauDemoApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.visualizations = [];

    activate();

    function activate() {
      vm.visualizations = [
        {
          title: 'Sample visualization 1',
          path: 'workbook1/viz1'
        },
        {
          title: 'Sample visualization 2',
          path: 'workbook2/viz2'
        }
      ]
    }

  }
})();
