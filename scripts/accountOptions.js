
const editAccount = document.querySelector('#editAccount');
auth.onAuthStateChanged(function(user) {
    
    //if user is logged in, do x
    if (user){
        UID = user.uid;
        document.getElementById("staticEmail").value = user.email;
        if(user.photoURL != null){
            document.getElementById("imageChange").src = user.photoURL;
            document.getElementById("URLImage").value = user.photoURL;
        }
        db.collection('Name').doc(UID).get().then((doc) => {
            if(doc.data().FirstName != null){
                document.getElementById("firstName").value = doc.data().FirstName;
            }
            if(doc.data().LastName != null){
                document.getElementById("lastName").value = doc.data().LastName;
            }
        });
        document.getElementById("inputPassword").value = user.password;
        document.getElementById("inputUserName").value = user.displayName;

    }
    //if user is logged out, do y.
    else {
    }
});
document.getElementById("saveChanges").disabled = true;
document.getElementById("cancelChanges").disabled = true;
document.getElementById("firstName").disabled = true;
document.getElementById("lastName").disabled = true;
document.getElementById("inputPassword").disabled = true;
document.getElementById("inputUserName").disabled = true;
document.getElementById("URLImage").disabled = true;
var edit = true;
// to undo:
//edit.contentEditable = 'false';
function editPage(){
        document.getElementById("saveChanges").disabled = false;
        document.getElementById("cancelChanges").disabled = false;
        document.getElementById("firstName").disabled = false;
        document.getElementById("lastName").disabled = false;
        document.getElementById("inputPassword").disabled = false;
        document.getElementById("inputUserName").disabled = false;
        document.getElementById("URLImage").disabled = false;

}
function cancel(){
    window.location.reload();
}

editAccount.addEventListener('submit', (e) =>{
    e.preventDefault();
    var user = firebase.auth().currentUser;
    const editFirstName = editAccount['firstName'].value;
    const editLastName = editAccount['lastName'].value;
    const password = editAccount['inputPassword'].value;
    const userName = editAccount['inputUserName'].value;
    const ImageURL = editAccount['URLImage'].value;

    return db.collection('Name').doc(UID).update({
        FirstName: editFirstName,
        LastName: editLastName,
    }).then(function(){
        user.updateProfile({ 
            displayName: userName,
            photoURL: ImageURL,
            password: password

          });
        document.getElementById("firstName").disabled = true;
        document.getElementById("lastName").disabled = true;
        document.getElementById("inputPassword").disabled = true;
        document.getElementById("inputUserName").disabled = true;
        document.getElementById("URLImage").disabled = true;
        window.alert("Changes were Successful!");
    });
});
    
