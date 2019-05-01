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