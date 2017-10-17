var isActive = true;
function closeMenu() {

	if(isActive) {
    	document.getElementById("navigation").style.visibility = "hidden";
	}
	else {
    	document.getElementById("navigation").style.visibility = "visible";
	}

	isActive = !isActive;
}

window.onresize = function() {
    document.getElementById("navigation").style.visibility = "visible";
};