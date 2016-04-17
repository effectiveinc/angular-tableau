(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('com.effectiveui.tableauDemoApp'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should have a data array', function() {
      expect(vm.data).toEqual(jasmine.any(Array));
    });

  });
})();
