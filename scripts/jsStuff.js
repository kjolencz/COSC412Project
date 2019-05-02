type="text/javascript"


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function adaptMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

auth.onAuthStateChanged(user => {
    
  //if user is logged in, do x
  if (user){

      document.getElementById("welcomeUser").innerHTML = "Welcome " + user.displayName;
      
  }
  //if user is logged out, do y.
  //if logged out, user == null.
  else {

  }
});


const logout = document.querySelector('#logOUT');
logout.addEventListener('click', (e) => {

    e.preventDefault();
    auth.signOut();
});
