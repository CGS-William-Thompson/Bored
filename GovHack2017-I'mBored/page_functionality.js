function buttoneClicked() {
    var popup = document.getElementById("myPopup");
   	popuptext.classList.toggle("show");
	document.getElementById("popuptext").style.visibility = "visible";
	document.getElementById("popup").disabled = true;
    
	
}

function off() {
	document.getElementById("popuptext").style.visibility = "hidden";
	document.getElementById("popup").disabled = false;
	
}

function init() {
	document.getElementById("buttonSection").style.paddingTop = ((window.innerHeight - (document.getElementById('buttonSection').clientHeight)) / 2) + "px";
}














