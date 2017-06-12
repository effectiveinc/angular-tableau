(function () {
  'use strict';

  angular
    .module('angularjs.tableau.demo')
    .config(config);

  /** @ngInject */
  function config($logProvider, tableauProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Configure tableau options
    // tableauProvider.configure({
    //   host: 'https://public.tableau.com',
    //   siteRoot: '/views/'
    // });

    tableauProvider.setDefaultOptions({
      hideToolbar: true,
      hideTabs: true
    });
  }

})();
