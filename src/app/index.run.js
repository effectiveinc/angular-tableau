(function() {
  'use strict';

  angular
    .module('angularTableau')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
