auth.onAuthStateChanged(user => {
    
    //if user is logged in, do x
    if (user){
        console.log('User logged in: ', user);
    }
    //if user is logged out, do y.
    //if logged out, user == null.
    else {
        console.log('User needs to log in');
        window.location.href = "index.html";
    }
});