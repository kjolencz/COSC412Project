function signUp(){
    var email = document.getElementById('#emailValue').value;
    localStorage.setItem('email', email);
    console.log("here");
}

function signUpEmail(){
    document.getElementById("#signup-email").innerHTML = localStorage.getItem('email');
    localStorage.clear();
}