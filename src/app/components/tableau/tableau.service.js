(function() {
  'use strict';

  angular
    .module('angularjs.tableau')
    .provider('tableau', tableauProvider);

  function tableauProvider() {
    var defaults = {};

    var service = {
      createOptions: createOptions,
      api: null
    };

    /**
     * Provide default VizCreateOptions to use when initializing visualizations
     * @see http://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
     */
    this.setDefaultOptions = setDefaultOptions;

    this.$get = getService;

    /** @ngInject */
    function getService($log, $window) {
      if (!$window.tableau) {
        $log.warn('Tableau API does not seem to be loaded! Make sure to include the appropriate <script> tag.');
        // see http://onlinehelp.tableau.com/current/api/js_api/en-us/help.htm#JavaScriptAPI/js_api_concepts_get_API.htm
      }
      service.api = $window.tableau;
      return service;
    }

    function setDefaultOptions(options) {
      angular.extend(defaults, options);
    }

    function createOptions(overrides) {
      return angular.extend({}, defaults, overrides);
    }

  }
})();
