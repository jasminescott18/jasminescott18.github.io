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

rhit.AboutController = class {
	constructor() {

		transitionEffect("#aboutImg", "resizing-img", false, 3000);
		transitionEffect("#aboutParagraphs", "resizing-text", false, 6000);
		transitionEffect("footer", "fade-in-footer", false, 9000);


		document.querySelector("#portfolioLink").addEventListener("click", (event) => {
			console.log("CLICK");
			transitionEffect("footer", "fade-in-footer-reverse", true, 0);
			transitionEffect("#aboutParagraphs", "resizing-text-reverse", true, 500);
			transitionEffect("#aboutImg", "resizing-img-reverse", true, 1000);
			transitionEffect("#aboutHeader", "resizing-header-reverse", true, 1500);
			redirect();
		});

	}
}

const transitionEffect = async (element, className, reverse, mil) => {
	let ele = document.querySelector(element);

	if (!reverse) {
		await delay(mil);
		ele.classList.remove("hidden");
		ele.classList.add(className);
	} else {
		await delay(mil);
		ele.classList.add(className);
		await delay(1000);
		ele.classList.add("hidden");
	}
};

const redirect = async () => {
	await delay(3000);
	window.location.href = "portfolio.html";
}

// https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
async function transitions(element, mil, className, reverse) {
	return await Promise.resolve(setTimeout(function () {
		rhit.transitionEffect(element, className, reverse);
	}, mil));
};


const delay = ms => new Promise(res => setTimeout(res, ms));


/* Main */
/** function and class syntax examples */
rhit.main = function () {
	console.log("Ready");

	if (document.querySelector("#aboutPage")) {
		new rhit.AboutController();
	}


};

rhit.main();