var isActive = true;
var isTableActive = true;
var nav = document.getElementById("navigation");
var table = document.getElementsByClassName("info");

function closeMenu() {

	if(isActive) {
    	nav.style.visibility = "hidden";
    	document.body.style.paddingTop = "2.5em";
	}
	else {
    	nav.style.visibility = "visible";
    	document.body.style.paddingTop = "17.4em";
	}

	isActive = !isActive;
}

function closeTable() {
	
	if(isTableActive) {
		table[0].style.visibility = "hidden";
	}
	else {
		table[0].style.visibility = "visible";
	}

	isTableActive = !isTableActive;
}

window.onresize = function() {

	if(window.innerWidth > 600)
	{
    	nav.style.visibility = "visible";
    	document.body.style.paddingTop = "50px";

    	isActive = true;
    }
    else
    {
    	nav.style.visibility = "hidden";
    	document.body.style.paddingTop = "2.5em";

    	isActive = false;
    }
};