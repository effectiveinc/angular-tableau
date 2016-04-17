(function() {
  'use strict';

  angular
    .module('com.effectiveui.tableauDemoApp')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
