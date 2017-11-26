mainApp.factory('fireBaseConfig', function(){
var config = {
    apiKey: "AIzaSyAB5GC2y9rLJsZ4jJs3sMK0aoaTVWZyjgs",
    authDomain: "usersd-da260.firebaseapp.com",
    databaseURL: "https://usersd-da260.firebaseio.com",
    projectId: "usersd-da260",
    storageBucket: "usersd-da260.appspot.com",
    messagingSenderId: "862796520091"
  };
  return firebase.initializeApp(config);    

})