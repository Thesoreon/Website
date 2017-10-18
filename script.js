var isActive = true;
function closeMenu() {

	if(isActive) {
    	document.getElementById("navigation").style.visibility = "hidden";
    	document.body.style.paddingTop = "2.5em";
	}
	else {
    	document.getElementById("navigation").style.visibility = "visible";
    	document.body.style.paddingTop = "17.4em";
	}

	isActive = !isActive;
}

window.onresize = function() {

	if(window.innerWidth > 600)
	{
    	document.getElementById("navigation").style.visibility = "visible";
    	document.body.style.paddingTop = "50px";

    	isActive = true;
    }
    else
    {
    	document.getElementById("navigation").style.visibility = "hidden";
    	document.body.style.paddingTop = "2.5em";

    	isActive = false;
    }
};