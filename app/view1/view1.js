'use strict';

mainApp.controller('View1Ctrl', ['$scope', '$firebaseArray', 'fireBaseConfig', '$window', function($scope, $firebaseArray, fireBaseConfig, $window) {
$scope.showlogout = true
// Create a root reference
var storageRef = firebase.storage().ref();

// While the file names are the same, the references point to different files
// mountainsRef.name === mountainImagesRef.name            // true
// mountainsRef.fullPath === mountainImagesRef.fullPath    // false

  var rootRef = firebase.database().ref();
  $scope.showEditForm = false
    $scope.users = $firebaseArray(rootRef);
  $scope.user = {name:'',email:'',contact:'',file:''};

  $scope.addUser = function(){
  fileUpload().then(
   function(url){
   $scope.user.file = url;  
   $scope.users.$add($scope.user).then(
    function(resp){
    var id = resp.key;
    
    console.log(id);
    $scope.user = {name:'',email:'',contact:'',file:''};
    }

  )
   } 
  )  

  }
  
$scope.editForm = function(user){
  $scope.showEditForm = true
  $scope.userId = user.$id
  $scope.user = {name:user.name,email:user.email,contact:user.contact, file:''};
}

$scope.updateUser = function(){
  var record = $scope.users.$getRecord($scope.userId)
  record.name = $scope.user.name;
  record.email = $scope.user.email;
  record.contact = $scope.user.contact;
  
  //save the updated value
  $scope.users.$save(record).then(
    function(resp){
    console.log("updated...");
    $scope.showEditForm = false
    $scope.user = {name:'',email:'',contact:'', file:''};
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

var fileUpload = function(){
 // var fileUrl;

  var mountainImagesRef = storageRef.child('users/'+$scope.file.filename);
  return mountainImagesRef.putString($scope.file.base64, 'base64', $scope.file.filentype).then(function(snapshot) {
  console.log(mountainImagesRef.fullPath);
  //var record = $scope.users.$getRecord(id)
  return snapshot.downloadURL;
  //$scope.users.$save(record);

  });
}

$scope.logout = function(){
  firebase.auth().signOut();
  $scope.showlogout = false
  $window.location.reload();
}


}]);