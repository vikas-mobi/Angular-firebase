'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

var config = {
    apiKey: "AIzaSyAB5GC2y9rLJsZ4jJs3sMK0aoaTVWZyjgs",
    authDomain: "usersd-da260.firebaseapp.com",
    databaseURL: "https://usersd-da260.firebaseio.com",
    projectId: "usersd-da260",
    storageBucket: "usersd-da260.appspot.com",
    messagingSenderId: "862796520091"
  };

  firebase.initializeApp(config);
  var rootRef = firebase.database().ref();
  
  $scope.users = $firebaseArray(rootRef);
  $scope.user = {name:'',email:'',contact:''};

  $scope.addUser = function(){
  $scope.users.$add($scope.user).then(
    function(resp){
    var id = resp.key;
    console.log(id);
    $scope.user = {name:'',email:'',contact:''};
    }

  )
  }

  $scope.deleteUser = function(user){
   $scope.users.$remove(user).then(
     function(resp){
     console.log("Deleted User.");
     }
   )
  }

}]);