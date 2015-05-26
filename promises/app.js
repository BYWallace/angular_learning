function getData($timeout, $q) {
  return function() {

    // simulated async function
    return $q(function(resolve, reject) {
      $timeout(function () {
        resolve(Math.floor(Math.random() * 10));
      }, 2000);
    });

    return defer.promise;
  }
}

angular.module('app', [])
.factory('getData', getData)
.run(function(getData) {
  var promise = getData()
  .then(function(num) {
    console.log(num);
    return num * 2;
  }, function(error) {
    console.error(error);
  })
  .then(function(num) {
    console.log(num); // = random number * 2
  })
  .finally(function() {
    console.log('Finished at:', new Date());
  });
});
