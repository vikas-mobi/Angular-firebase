'use strict';
mainApp.controller('View2Ctrl', ['$scope', '$window', function($scope, $window) {
const auth = firebase.auth()
$scope.signUp = function(){
 var promise = auth.signInWithEmailAndPassword($scope.email, $scope.pass)

 promise.catch(e =>{
   console.log(e.message);
   $window.location.reload();
 })
}

}]);