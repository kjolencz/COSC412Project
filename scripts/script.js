

function iFrameOn(){
    Scribble_Box.document.designMode = 'On';
    Scribble_Box.document.body.style.wordWrap = 'break-word';
}
function iBold(){
	Scribble_Box.document.execCommand('bold',false,null); 
}
function iFont() {
	var fontName = document.getElementById("fontF").value;
    Scribble_Box.document.execCommand('fontName', false, fontName);
}
function iUnderline(){
	Scribble_Box.document.execCommand('underline',false,null);
}
function iItalic(){
	Scribble_Box.document.execCommand('italic',false,null); 
}
function iFontSize(){
	var size = document.getElementById("fSize").value;  //prompt('Enter a size 1 - 7', '');
	Scribble_Box.document.execCommand('FontSize',false,size);
}
function iForeColor(){
	var color = document.getElementById("Color").value;
	Scribble_Box.document.execCommand('ForeColor',false,color);
}
function iUndo(){
    Scribble_Box.document.execCommand('undo',false, null);
}
function iIndent(){
    Scribble_Box.document.execCommand('indent',false, null);
}
function iCut(){
    Scribble_Box.document.execCommand('cut',false, null);
}
function iCopy(){
    Scribble_Box.document.execCommand('copy',false, null);
}
function iPaste(){
    Scribble_Box.document.execCommand('paste',false, null);
}
function iOutdent(){
    Scribble_Box.document.execCommand('outdent',false, null);
}
function iRedo(){
    Scribble_Box.document.execCommand('redo',false, null);
}
function iCenter(){
    Scribble_Box.document.execCommand('justifyCenter',false, null);
}
function iLeft(){
    Scribble_Box.document.execCommand('justifyLeft',false, null);
}
function iRight(){
    Scribble_Box.document.execCommand('justifyRight',false, null);
}
function iHorizontalRule(){
	Scribble_Box.document.execCommand('inserthorizontalrule',false,null);
}
function iUnorderedList(){
	Scribble_Box.document.execCommand("InsertUnorderedList", false,"newOL");
}
function iOrderedList(){
	Scribble_Box.document.execCommand("InsertOrderedList", false,"newUL");
}
function iLink(){
	var linkURL = document.getElementById("linkBox").value; 
	Scribble_Box.document.execCommand("CreateLink", false, ("http://" + linkURL));
	document.getElementById('linkBox').value = "";
}
function iUnLink(){
	Scribble_Box.document.execCommand("Unlink", false, null);
}
function iImage(){
	var image = document.getElementById("imagePlace").src;
	document.getElementById("fillerImage").src = image;
	Scribble_Box.document.execCommand('insertimage', false, image); 
}
function changeImage(){
	var image = document.getElementById('imageBox').value;
	if(image != ''){
		document.getElementById('imagePlace').src= image;
		document.getElementById('imagePlace').value = "";
	}
}
/*function submit_form(){
	var theForm = document.getElementById("myform");
	theForm.elements["myTextArea"].value = window.frames['Scribble_Box'].document.body.innerHTML;
	theForm.submit();
}*/

function downloadURI() {
	var file = prompt("Please enter file name", '');
	var myIFrame = document.getElementById("Scribble_Box");
	var content = myIFrame.contentWindow.document.body.innerHTML;
    var link = document.createElement("a");
    link.download = file +".doc"
    link.href = "data:," + content;
	link.click();
}

function fillField(){
	var URL = window.location.search
	var fill = URL.replace('?TextFile=','');
	console.log(fill);

	db.collection("TextFile").where("FileName", "==", fill).onSnapshot(function(Snapshot) {
		var myIFrame = document.getElementById("Scribble_Box");
		var iframeDoc = myIFrame.contentWindow.document;
		Snapshot.forEach(function(doc) {
			iframeDoc.open();
			iframeDoc.write(doc.data().Text);
			iframeDoc.close();
		});
	});
}


const textList = document.querySelector('#text-list');
function renderChat(doc){
	let li = document.createElement('li');
	let text = document.createElement('span');

	li.setAttribute('data-id', doc.id);
	text.textContent = doc.data().FileName;

	li.appendChild(text);
	textList.appendChild(li);

}
document.getElementById("saveButton").addEventListener("click", function(e){
	e.preventDefault();
	var myIFrame = document.getElementById("Scribble_Box");
	var content = myIFrame.contentWindow.document.body.innerHTML;
	var className = document.getElementById('className').value.toUpperCase();
	var classNumber = document.getElementById('classNumber').value
	var file = document.getElementById('fileName').value
	db.collection('TextFile').add({
		FileName: file + ".doc",
		Text: content,
		Class: className + classNumber

	});
});
/*document.getElementById("uploadButton").addEventListener("click", function(e){
	e.preventDefault();
	var name = prompt("Please enter file name", '');
	db.collection("TextFile").where("FileName", "==", name).onSnapshot(function(Snapshot) {
		var myIFrame = document.getElementById("Scribble_Box");
		var iframeDoc = myIFrame.contentWindow.document;
		Snapshot.forEach(function(doc) {
			iframeDoc.open();
			iframeDoc.write(doc.data().Text);
			iframeDoc.close();
		});
	});

});*/

db.collection('TextFile').onSnapshot(function(snapshot){
	let changes = snapshot.docChanges();
	changes.forEach(function(change) {
		if(change.type == 'added'){
			renderChat(change.doc);
		}
		else if (change.type == 'removed'){
			let li = textList.querySelector('[data-id=' + change.doc.id + ']');
			textList.removeChild(li);
		}
	})
});

window.onbeforeunload = function () {
	return "Data will be lost if you leave the page, are you sure?";
};