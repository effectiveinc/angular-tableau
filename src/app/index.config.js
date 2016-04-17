(function() {
  'use strict';

  angular
    .module('com.effectiveui.tableauDemoApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, tableauProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Configure tableau options
    tableauProvider.configure({
      host: 'https://tableau.effectiveui.com/',
      siteRoot: 'site/demo/'
    });
    tableauProvider.setDefaultOptions({
      hideToolbar: true,
      hideTabs: true
    });
  }

})();
