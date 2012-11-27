angular.module('directives.button', [])

.directive('button', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {
      element.addClass('btn');
    }
  };
})

.directive('primaryButton', function() {
  return {
    restrict: 'E',
    template: '<button ng-transclude></button>',
    transclude: true,
    replace: true,
    link: function(scope, element) {
      element.addClass('btn-primary');
    }
  };
});