//Change page appearance depending on login status
//Hides logout and account buttons when not logged in
//Hides login and signup buttons when logged in.

auth.onAuthStateChanged(user => {
    
    //if user is logged in, do x
    if (user){
        

    }
    //if user is logged out, do y.
    else {
       
    }
});

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', function(e) {
  e.preventDefault();
  

  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;


    auth.createUserWithEmailAndPassword(email,password).then(function(cred) {
        const userName = signupForm['userName'].value;
        firebase.auth().onAuthStateChanged(function(user) {
            var user = firebase.auth().currentUser;
            if (user) {

                db.collection('Name').doc(cred.user.uid).set({
                    FirstName: null,
                    LastName: null,
                    
                });

              user.updateProfile({ 
                displayName: userName,

              }).then(function() {
                window.location.href = "loading.html";
              }, function(error) {
                if(error){
                    console.log(error);
                    }
                });     
            }
        })
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = errorCode.replace('auth/','');
        document.getElementById("errorSignUP").style.color = "red";
        document.getElementById('errorSignUP').innerHTML = errorMessage;
        console.log(errorMessage);
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
    auth.signInWithEmailAndPassword(email,password).then(function(){

    }).then(function(){
        window.location.href = "loading.html";
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = errorCode.replace('auth/','');
        document.getElementById("errorLogin").style.color = "red";
        document.getElementById('errorLogin').innerHTML = errorMessage;
        console.log(errorMessage);
    });

});

function checkPassword(){
    var passOne = document.getElementById('signup-password').value;
    var passTwo = document.getElementById('signup-passwordCheck').value;
    if(passOne != passTwo){
        document.getElementById("signup-passwordCheck").style.borderColor = "red";
        document.getElementById("myBtn").disabled = true;
        
    }
    else{
        document.getElementById("signup-passwordCheck").style.borderColor = "#d9d9d9";
        document.getElementById("myBtn").disabled = false;
    }
}

function signUpEmail(){
    console.log(localStorage.getItem('email'));
    document.getElementById("signup-email").value = localStorage.getItem('email');
    localStorage.clear();
}
