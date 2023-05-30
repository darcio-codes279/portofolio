const toggleMenu = () => {
	document.body.classList.toggle("open");
};

// function showFunction1() {
// 	document.querySelector(".front-end-message").style.display = "block";
// 	document.querySelector(".cloud-eng-message").style.display = "none";
// 	document.querySelector(".tech-enth-message").style.display = "none";

// 	document.querySelector("#item1").style.color = "#CEA76F";
// 	document.querySelector("#item2").style.color = "white";
// 	document.querySelector("#item3").style.color = "white";

// 	document.querySelector("#item1").style.fontSize = "30px";
// 	document.querySelector("#item2").style.fontSize = "22px";
// 	document.querySelector("#item3").style.fontSize = "22px";
// }

// function showFunction2() {
// 	document.querySelector(".cloud-eng-message").style.display = "block";
// 	document.querySelector(".front-end-message").style.display = "none";
// 	document.querySelector(".tech-enth-message").style.display = "none";

// 	document.querySelector("#item1").style.color = "white";
// 	document.querySelector("#item2").style.color = "#CEA76F";
// 	document.querySelector("#item3").style.color = "white";

// 	document.querySelector("#item1").style.fontSize = "22px";
// 	document.querySelector("#item2").style.fontSize = "30px";
// 	document.querySelector("#item3").style.fontSize = "22px";
// }

// function showFunction3() {
// 	document.querySelector(".tech-enth-message").style.display = "block";
// 	document.querySelector(".front-end-message").style.display = "none";
// 	document.querySelector(".cloud-eng-message").style.display = "none";

// 	document.querySelector("#item1").style.color = "white";
// 	document.querySelector("#item2").style.color = "white";
// 	document.querySelector("#item3").style.color = "#CEA76F";

// 	document.querySelector("#item1").style.fontSize = "22px";
// 	document.querySelector("#item2").style.fontSize = "22px";
// 	document.querySelector("#item3").style.fontSize = "30px";
// }

const frontEndMessage = document.querySelector(".front-end-message");
const cloudEngMessage = document.querySelector(".cloud-eng-message");
const techEnthMessage = document.querySelector(".tech-enth-message");

const frontEndBtn = document.querySelector("#frontEndBtn");
const cloudEngBtn = document.querySelector("#cloudEngBtn");
const techEnthBtn = document.querySelector("#techEnthBtn");

frontEndBtn;
cloudEngBtn;
techEnthBtn;

function showFunction(elementToShow, elementToHide1, elementToHide2) {
	elementToShow.style.display = "block";
	elementToHide1.style.display = "none";
	elementToHide2.style.display = "none";
}

function styleFunction(
	item1,
	item2,
	item3,
	fontSizeUp,
	fontSizeDown1,
	fontSizeDown2
) {
	item1.style.color = "#CEA76F";
	item2.style.color = "white";
	item3.style.color = "white";
	fontSizeUp.style.fontSize = "30px";
	fontSizeDown1.style.fontSize = "22px";
	fontSizeDown2.style.fontSize = "22px";
}

function showFrontEndbtn() {
	showFunction(frontEndMessage, cloudEngMessage, techEnthMessage);
	styleFunction(frontEndBtn, cloudEngBtn, techEnthBtn, "30px", "22px", "22px");
	console.log("1 clicked");
}

function showCloudEngbtn() {
	showFunction(cloudEngMessage, frontEndMessage, techEnthMessage);
	styleFunction(cloudEngBtn, frontEndBtn, techEnthBtn, "22px", "30px", "22px");
	console.log("2 clicked");
}

function showTechEnthbtn() {
	showFunction(techEnthMessage, frontEndMessage, cloudEngMessage);
	styleFunction(techEnthBtn, frontEndBtn, cloudEngBtn, "22px", "22px", "30px");
	console.log("3 clicked");
}

frontEndBtn.addEventListener("click", showFrontEndbtn);
cloudEngBtn.addEventListener("click", showCloudEngbtn);
techEnthBtn.addEventListener("click", showTechEnthbtn);

const slider = document.querySelector(".carousel");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
	isDown = true;
	slider.classList.add("active");
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", (_) => {
	isDown = false;
	slider.classList.remove("active");
});
slider.addEventListener("mouseup", (_) => {
	isDown = false;
	slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const SCROLL_SPEED = 3;
	const walk = (x - startX) * SCROLL_SPEED;
	slider.scrollLeft = scrollLeft - walk;
});
