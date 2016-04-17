(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('com.effectiveui.tableauDemoApp'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should have a visualizations array', function() {
      expect(vm.visualizations).toEqual(jasmine.any(Array));
    });

  });
})();
