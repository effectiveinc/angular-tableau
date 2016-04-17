(function() {
  'use strict';

  describe('tableau service', function() {
    var tableau;
    var tableauAPIMock;

    beforeEach(module('com.effectiveui.tableau'));
    beforeEach(module(function ($provide) {
      // set up a mock $window service with fake tableau API
      tableauAPIMock = {};
      var windowMock = {
        tableau: tableauAPIMock
      };
      $provide.value('$log', { warn: angular.noop });
      $provide.value('$window', windowMock);
    }));
    beforeEach(module(function (tableauProvider) {
      // grab the provider and configure it as we would in a module .config function
      tableauProvider.configure({
        host: 'http://testHostValue/',
        siteRoot: 'testSiteRootValue/'
      });
      tableauProvider.setDefaultOptions({
        hideToolbar: true,
        hideTabs: true
      });
    }));
    beforeEach(inject(function(_tableau_) {
      // grab the service instance configured by the provider
      tableau = _tableau_;
    }));

    it('should expose the tableau JavaScript API', function() {
      expect(tableau.api).toBe(tableauAPIMock);
    });

    it('should create a dashboard view URL in the expected format based on the configuration', function() {
      expect(tableau.createUrl('myWorkbook/myView')).toBe('http://testHostValue/testSiteRootValue/views/myWorkbook/myView');
    });

    it('should create options by adding to/overriding the default options that were set', function() {
      expect(tableau.createOptions({ width: '200px', hideTabs: false })).toEqual({
        hideToolbar: true,
        hideTabs: false,
        width: '200px'
      });
    });

  });
})();
