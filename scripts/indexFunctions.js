auth.onAuthStateChanged(user => {
    
    //if user is logged in, do x
    if (user){
        console.log('User logged in: ', user);
        document.getElementById("loginButton").innerHTML = "Logout";
    }
    //if user is logged out, do y.
    //if logged out, user == null.
    else {
        console.log('User logged out.');
    }
  });

  //Login

const login = document.querySelector('#login-form');
login.addEventListener('submit', function(e) {
    e.preventDefault();
    
    //get info
    const email = login['login-email'].value;
    const password = login['login-password'].value;

    //actual sign-in method
    auth.signInWithEmailAndPassword(email,password).then(cred => {

        //Closes pop-up after sign in is complete
        //const modal = document.querySelector('#modal-login');
        //M.Modal.getInstance(modal).close();

        //Resets form
        login.reset();
    });
})