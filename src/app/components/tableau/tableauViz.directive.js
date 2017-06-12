(function () {
  'use strict';

  angular
    .module('angularjs.tableau')
    .directive('euiTableauViz', euiTableauViz);

  /** @ngInject */
  function euiTableauViz(tableau, $log) {
    var directive = {
      restrict: 'A',
      scope: {
        path: '@euiTableauViz',
        vizHeight: '@',
        filters: '&',
        onCustomViewLoad: '&',
        onCustomViewRemove: '&',
        onCustomViewSave: '&',
        onCustomViewSetDefault: '&',
        onFilterChange: '=',
        onMarksSelection: '&',
        onParameterChange: '&',
        onStoryPointSwitch: '&',
        onTabSwitch: '&',
        onToolbarStateChange: '&',
        onVizResize: '&'
      },
      link: function (scope, element, attrs) {
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

          var options = tableau.createOptions({
            width: '100%',
            height: value
          });

          if (scope.filters) {
            angular.merge(options, scope.filters);
          }

          // TODO: May want a way to lazy-init visualizations as they are scrolled into view
          // (especially on mobile devices, to avoid overloading the browser)
          $log.log('About to instantiate Viz object');
          $log.log('Path: ' + scope.path);
          $log.log('Options: ' + angular.toJson(options));
          viz = new tableau.api.Viz(element[0], scope.path, options);

          // Implement callbacks for each event if passed in.
          if (scope.onCustomViewLoad && angular.isDefined(attrs.onCustomViewLoad)) {
            viz.addEventListener('customViewLoad', function (events) {
              $log.log("Event 'customViewLoad' has fired");
              scope.onCustomViewLoad({ arg1: events });
            });
          }

          if (scope.onCustomViewRemove && angular.isDefined(attrs.onCustomViewRemove)) {
            viz.addEventListener('customViewRemove', function (events) {
              $log.log("Event 'customViewRemove' has fired");
              scope.onCustomViewRemove({ arg1: events });
            });
          }

          if (scope.onCustomViewSave && angular.isDefined(attrs.onCustomViewSave)) {
            viz.addEventListener('customViewSave', function (events) {
              $log.log("Event 'customViewSave' has fired");
              scope.onCustomViewSave({ arg1: events });
            });
          }

          if (scope.onCustomViewSetDefault && angular.isDefined(attrs.onCustomViewSetDefault)) {
            viz.addEventListener('customViewSetDefault', function (events) {
              $log.log("Event 'customViewSetDefault' has fired");
              scope.onCustomViewSetDefault({ arg1: events });
            });
          }
          
           if (scope.onFilterChange && angular.isDefined(attrs.onFilterChange)) {
            viz.addEventListener('filterChange', function (events) {
              $log.log("Event 'filterChange' has fired");
              scope.onFilterChange({ arg1: events });
            });
          }

           if (scope.onMarksSelection && angular.isDefined(attrs.onMarksSelection)) {
            viz.addEventListener('marksSelection', function (events) {
              $log.log("Event 'marksSelection' has fired");
              scope.onMarksSelection({ arg1: events });
            });
          }

           if (scope.onParameterChange && angular.isDefined(attrs.onParameterChange)) {
              viz.addEventListener('parameterValueChange', function (events) {
                $log.log("Event 'parameterValueChange' has fired");
                scope.onParameterChange({ arg1: events });
              });
          }

          if (scope.onStoryPointSwitch && angular.isDefined(attrs.onStoryPointSwitch)) {
            viz.addEventListener('storyPointSwitch', function (events) {
              $log.log("Event 'storyPointSwitch' has fired");
              scope.onStoryPointSwitch({ arg1: events });
            });
          }

          if (scope.onTabSwitch && angular.isDefined(attrs.onTabSwitch)) {
            viz.addEventListener('tabSwitch', function (events) {
              $log.log("Event 'tabSwitch' has fired");
              scope.onTabSwitch({ arg1: events });
            });
          }

          if (scope.onToolbarStateChange && angular.isDefined(attrs.onToolbarStateChange)) {
            viz.addEventListener('toolbarStateChange', function (events) {
              $log.log("Event 'toolbarStateChange' has fired");
              scope.onToolbarStateChange({ arg1: events });
            });
          }

          if (scope.onVizResize && angular.isDefined(attrs.onVizResize)) {
            viz.addEventListener('vizResize', function (events) {
              $log.log("Event 'vizResize' has fired");
              scope.onVizResize({ arg1: events });
            });
          }

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