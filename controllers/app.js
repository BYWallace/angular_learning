angular.module('app', []);

angular.module('app').controller('MainCtrl', function($scope) {
  var self = this;

  self.message = 'hello';

  self.updateMessage = function(message) {
    self.message = message;
  }
});
