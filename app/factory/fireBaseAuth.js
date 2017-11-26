mainApp.factory('Auth', function($q){

  var info;
 firebase.auth().onAuthStateChanged(fireBaseUser => {
    if(fireBaseUser)
      info = fireBaseUser;
    else
      info =  'false';
  })

  return info;

})