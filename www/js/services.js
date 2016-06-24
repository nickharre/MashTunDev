angular.module('app.services', ['firebase'])

.factory("Kegs", function($firebaseArray) {
  var kegsRef = new Firebase("https://boiling-inferno-6532.firebaseio.com/kegs");
  return $firebaseArray(kegsRef);
})

.factory("Beers", function($firebaseArray) {
  var beersRef = new Firebase("https://boiling-inferno-6532.firebaseio.com/beers");
  return $firebaseArray(beersRef);
})

.factory("Customers", function($firebaseArray) {
  var customersRef = new Firebase("https://boiling-inferno-6532.firebaseio.com/customers");
  return $firebaseArray(customersRef);
})

.factory("Users", function($firebase) {
  var ref = new Firebase("https://boiling-inferno-6532.firebaseio.com/");
  return { ref:function(){return ref;}};
})



.service('BlankService', [function(){

}]);

