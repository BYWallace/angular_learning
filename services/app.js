angular.module('app', []);

// Service
angular.module('app').factory('messages', function() {
  var messages = {};

  messages.list = [];

  messages.add = function(message) {
    messages.list.push({id: messages.list.length, text: message});
  };

  return messages;
});

// Controllers
angular.module('app').controller('ListCtrl', function(messages) {
  var self = this;

  self.messages = messages.list;
});

angular.module('app').controller('PostCtrl', function(messages) {
  var self = this;

  self.newMessage = 'Hello World!';

  self.addMessage = function(message) {
    messages.add(message);
    self.newMessage = '';
  };
});
