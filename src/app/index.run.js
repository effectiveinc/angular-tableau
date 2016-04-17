(function() {
  'use strict';

  angular
    .module('com.effectiveui.tableauDemoApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
