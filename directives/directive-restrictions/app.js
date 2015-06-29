angular.module('greetings', [])
.directive('welcome', function() {
  return {
    restrict: 'A',
    link: function() {
      alert('Howdy!');
    }
  }
})

.directive('goodbye', function() {
  return {
    restrict: 'A',
    link: function() {
      alert('See ya later!');
    }
  }
});
