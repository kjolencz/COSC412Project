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


 /*function searchBarSearch() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}*/

auth.onAuthStateChanged(user => {
    
  //if user is logged in, do x
  if (user){
      console.log('User logged in: ',user, user.displayName);
      document.getElementById("welcomeUser").innerHTML = "Welcome " + user.displayName;
      
  }
  //if user is logged out, do y.
  //if logged out, user == null.
  else {
      console.log('User logged out.');
  }
});


const logout = document.querySelector('#logOUT');
logout.addEventListener('click', (e) => {

    e.preventDefault();
    auth.signOut();
});
