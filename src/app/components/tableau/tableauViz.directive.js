(function() {
  'use strict';

  angular
    .module('com.effectiveui.tableau')
    .directive('euiTableauViz', euiTableauViz);

  /** @ngInject */
  function euiTableauViz(tableau) {
    var directive = {
      restrict: 'A',
      scope: {
        path: '@euiTableauViz',
        vizHeight: '@'
      },
      link: function (scope, element) {
        var viz;

        scope.$watch('vizHeight', function (value) {
          element.css('height', value);

          if (viz) {
            // if the viz object has already been created, simply adjust the height
            // (this is a somewhat undocumented pattern for setFrameSize arguments -
            // officially, it takes ints for both width and height. If this proves
            // unreliable, the alternative would be to dispose() the viz instead and
            // allow it to be re-created (i.e. remove the return statement)
            viz.setFrameSize(undefined, value);
            return;
          }

          var url = tableau.createUrl(scope.path);
          var options = tableau.createOptions({
            width: '100%',
            height: value
          });

          // TODO: May want a way to lazy-init visualizations as they are scrolled into view
          // (especially on mobile devices, to avoid overloading the browser)
          viz = new tableau.api.Viz(element[0], url, options);
        });

        scope.$on('$destroy', function () {
          if (viz) {
            viz.dispose();
            viz = null;
          }
        });
      }
    };

    return directive;

  }

})();
