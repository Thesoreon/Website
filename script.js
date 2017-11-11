"use strict";
var isActive = true;
var imgIndex = 0;
var nav = document.getElementById("navigation");

ImageGallery();

function closeMenu() {

	if(isActive) {
    	nav.style.visibility = "hidden";
    	document.body.style.paddingTop = "2.5em";
	}
	else {
    	nav.style.visibility = "visible";
    	document.body.style.paddingTop = "18em";
	}

	isActive = !isActive;
}

function toggleInfo(x) {

	var info = document.getElementsByClassName("info")[x];

	if(info.style.display == "block")
		info.style.display = "none";
	else
		info.style.display = "block";
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

function ImageGallery() {

	var images = document.getElementsByClassName("certificate");

	for (var i = 0; i < images.length; i++) {
		if(i != imgIndex)
			images[i].style.display = "none";
		else
			images[i].style.display = "block";
	}

	imgIndex++;
	if(imgIndex >= images.length)
		imgIndex = 0;

	setTimeout(ImageGallery, 5000);
}