'use strict';

// Declare app level module which depends on views, and components
var mainApp = angular.module('myApp', [
  'ngRoute',
  'ui.router',
  'naif.base64',
  'firebase',
  'myApp.version'
])



mainApp.config(['$locationProvider', '$routeProvider', '$stateProvider', function($locationProvider, $routeProvider, $stateProvider) {
    var helloState = {
    name: 'users',
    url:'/users',
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
   
    }

  var aboutState = {
    name: 'view2',
    url: '/view2',
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);

  // $locationProvider.hashPrefix('!');
  
  // $routeProvider.otherwise({redirectTo: '/users'});
}]);

mainApp.run(function(fireBaseConfig, $state){
  firebase.auth().onAuthStateChanged(fireBaseUser => {
    if(fireBaseUser)
      $state.go('users');
    else
     $state.go('view2');
  })
})
