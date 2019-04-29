function iFrameOn(){
    Scribble_Box.document.designMode = 'On';
    Scribble_Box.document.body.style.wordWrap = 'break-word';
}
function iBold(){
	Scribble_Box.document.execCommand('bold',false,null); 
}
function iFont() {
	var fontName = document.getElementById("fontF").value;
    document.execCommand('fontName', false, fontName);
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
	var color = document.getElementById("Color").value;//var color = prompt('Define a basic color or apply a hexadecimal color code for advanced colors:', '');
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
	//var imgSrc = document.createElement(image);
	//var imgSrc = image.style.height = '40px';
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