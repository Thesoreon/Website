function TypeConversation() {
	var x = ["Haha", 50, true, 3.14, NaN, [1,2,3,4], {name: "John", age: 34}, new Date(), Date()];
		for (var i = 0; i < x.length; i++) {
			document.write(x[i] + ": " + typeof x[i] + "<br />");
		}
}

function TryAndCatch() {

	try {
		Add();
	}

	catch (err) {
		document.write(err);
	}

	finally {
		document.write("<br />Proběhl try and catch + finally kod");
	}
}