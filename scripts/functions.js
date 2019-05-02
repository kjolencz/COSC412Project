var form = document.getElementById("signUP");

form.addEventListener('submit', function(e){
    e.preventDefault();
    var email = document.getElementById('emailValue').value;
    localStorage.setItem('email', email);
    window.location.href="login.html";
});

