auth.onAuthStateChanged(user => {
    
    //if user is logged in, do x
    if (user){
    
    }
    //if user is logged out, do y.
    //if logged out, user == null.
    else {

        window.location.href = "index.html";
    }
});