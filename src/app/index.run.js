(function() {
  'use strict';

  angular
    .module('angularjs.tableau.demo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
