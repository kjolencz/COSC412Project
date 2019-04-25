//Change page appearance depending on login status
//Hides logout and account buttons when not logged in
//Hides login and signup buttons when logged in.

auth.onAuthStateChanged(user => {
    
    //if user is logged in, do x
    if (user){
        console.log('User logged in: ',user, user.displayName);
    }
    //if user is logged out, do y.
    //if logged out, user == null.
    else {
        console.log('User logged out.');
    }
});




//Authentication for sign-up

//.then refers to a type of event called a promise
//a promise means that the auth server tells the program an event will eventually happen.
//when the event happens, .then fires.
//Lets us query events for the CSS without it going off prematurely.

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

    //actual account creation
    auth.createUserWithEmailAndPassword(email,password).then(cred =>{
        const userName = signupForm['userName'].value;
        firebase.auth().onAuthStateChanged(function(user) {
            var user = firebase.auth().currentUser;
            if (user) {

               // Updates the user attributes:
              user.updateProfile({ 
                displayName: userName,

              }).then(function() {
                var name = user.displayName;
                console.log(name)
              }, function(error) {
                if(error){
                    console.log(error);
            }
        });     

    }
});

        //Closes pop-up after signup is complete
        //const modal = document.querySelector('#modal-signup');
        //M.Modal.getInstance(modal).close();

        //Resets form
        signupForm.reset();
        location.reload();
    });
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

        //Resets form
        login.reset();
    });
})

//Logout

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {

    e.preventDefault();
    auth.signOut();


})