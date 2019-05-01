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


})
const form = document.querySelector('#searchForm');
const textList = document.querySelector('#myUL');
form.addEventListener('submit', function(e){
  e.preventDefault();
  var myList = document.getElementById('myUL');
  myList.innerHTML = 'File Not Found';
  var className = document.getElementById('myInputClass').value;
  var classNumber = document.getElementById('myInputNumber').value;
  var name = className.toUpperCase() + classNumber;
  console.log(name);

  db.collection("TextFile").where("Class", "==", name).onSnapshot(function(Snapshot) {
    myList.innerHTML = '';
    Snapshot.forEach(function(doc) {
      console.log(doc.data().FileName);
      let li = document.createElement('li');
      let text = document.createElement('span');
      var a = document.createElement('a');
      li.setAttribute('data-id', doc.id);
      text.textContent = doc.data().FileName;


      if(doc.data() != ""){
        var linkText = document.createTextNode(text.textContent);
        a.appendChild(linkText);
        a.href = "textEditor.html" +"?TextFile=" + text.textContent;
        a.setAttribute("id", text.textContent);
        li.appendChild(a);
        textList.appendChild(li);
      }
    });
    if(myList.innerHTML == ''){
      myList.innerHTML = 'File Not Found';
    }
  });
});