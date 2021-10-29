/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * PUT_YOUR_NAME_HERE
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
rhit.variableName = "Jasmine Scott";

/** function and class syntax examples */

rhit.transitionEffect = function (element, className) {
	let aboutImage = document.querySelector(element);
	aboutImage.classList.remove("hidden");
	aboutImage.classList.add(className);
};

async function transitions(element, mil, className) {
	return await Promise.resolve(setTimeout(function () {
		rhit.transitionEffect(element, className);
	}, mil));
};



/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");

	if (document.querySelector("#aboutPage")) {
		transitions("#aboutImg", 3000, "resizing-img").then(transitions("#aboutParagraphs", 6000, "resizing-text"));
		transitions("footer", 9000, "fade-in-footer");
	}


};

rhit.main();