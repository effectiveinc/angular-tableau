(function() {
  'use strict';

  describe('tableauViz directive', function() {
    var $compile;
    var $rootScope;
    var scope;
    var el;
    var tableauMock;
    var vizInstanceMock;

    beforeEach(module('angularjs.tableau'));
    beforeEach(module(function ($provide) {
      // create a mock tableau service
      vizInstanceMock = {
        setFrameSize: jasmine.createSpy('setFrameSize'),
        dispose: jasmine.createSpy('dispose')
      };
      tableauMock = {
        createOptions: function (opts) {
          return angular.extend({ test: 'testValue' }, opts);
        },
        api: {
          Viz: jasmine.createSpy('api.Viz').and.returnValue(vizInstanceMock)
        }
      };
      $provide.value('tableau', tableauMock);
    }));
    beforeEach(inject(function(_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    function compile(template) {
      el = angular.element(template || '<div eui-tableau-viz="testWorkbook/testView" viz-height="100px"></div>');
      scope = $rootScope.$new();

      $compile(el)(scope);
      $rootScope.$digest();
    }

    it('should attach a new viz to the directive\'s element', function() {
      compile();
      expect(tableauMock.api.Viz).toHaveBeenCalled();
      expect(tableauMock.api.Viz.calls.mostRecent().args[0]).toBe(el[0]);
    });

    it('should use the provided viz path to create the viz URL', function() {
      compile();
      expect(tableauMock.api.Viz.calls.mostRecent().args[1]).toBe('http://test/testWorkbook/testView');
    });

    it('should add 100% width and the provided height to the default viz options', function() {
      compile();
      expect(tableauMock.api.Viz.calls.mostRecent().args[2]).toEqual({
        test: 'testValue',
        width: '100%',
        height: '100px'
      });
    });

    it('should tell the viz to update its frame size if the viz height changes after creation', function() {
      $rootScope.opts = { height: '150px' };
      compile('<div eui-tableau-viz="testWorkbook/testView" viz-height="{{ opts.height }}"></div>');
      $rootScope.opts.height = '200px';
      $rootScope.$apply();
      expect(vizInstanceMock.setFrameSize).toHaveBeenCalledWith(undefined, '200px');
    });

    it('should clean up the created viz when the directive\'s element is destroyed', function() {
      compile();
      expect(vizInstanceMock.dispose).not.toHaveBeenCalled();
      scope.$broadcast('$destroy');
      expect(vizInstanceMock.dispose).toHaveBeenCalled();
    });

  });
})();
