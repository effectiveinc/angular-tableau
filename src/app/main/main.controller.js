(function() {
  'use strict';

  angular
    .module('com.effectiveui.tableauDemoApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.data = [];

    activate();

    function activate() {

    }

  }
})();
